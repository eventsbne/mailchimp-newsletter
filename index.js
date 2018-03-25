const async = require('async');
const request = require('request');
const template = require('./template');
const moment = require('moment-timezone');
moment.tz.setDefault('Australia/Brisbane');

const he = require('he');
const mailchimp = require('./mailchimp.js');
const timezone = 10 * 60;

function text2html(text){
  return String(text).replace(/\n/g, '<br>');
}

const suppressOrganizers = ['Moreton Bay Region Libraries'];
function getUpcomingEvents(done){
  request('https://eventsbne.me/upcoming.json', function(error, res, body){
    if(error) return done(error);
    const upcoming = JSON.parse(body).events;

    const start = moment().startOf('week').add(8, 'days');
    const end = moment().startOf('week').add(8 + 7, 'days');

    const nextWeek = upcoming
      .filter(event => !suppressOrganizers.includes(event.organizer))
      .filter(event => {
        const date = new Date(event.timeStart);
        return date > start && date < end;
      });

    const days = {};
    nextWeek.forEach(event => {
      const timeStart = moment(new Date(event.timeStart));
      const name = timeStart.format('dddd');
      const date = timeStart.format('Do');
      event.friendlyTimeStart = timeStart.format('h:mma');
      if(!days[name]) days[name] = { name, date, events: [] };
      if(event.uri.includes('/holiday')){
        days[name].holiday = event.name;
      } else {
        days[name].events.push(event);
      }
    });

    return done(null, days);
  });
}
function go(req, callback){
  async.auto({
    getUpcomingEvents,
  }, (error, results) => {
    if(error) return callback(error);
    const html = template({
      subject: req.query.subject,
    }, [
      {
        type: 'image-column',
        params: {
          image: req.query.pic,
          alt: req.query.name,
          content: text2html(req.query.intro),
        },
      },
      {
        type: 'events',
        params: {
          days: results.getUpcomingEvents,
        },
      },
      {
        type: 'nested-container',
        params: {
          content: `<p>${he.encode(req.query.footer)}</p><p>For all the latest, check out <a href="https://eventsbne.me/">eventsbne.me</a>.</p>`
        }
      }
    ]);

    if (!req.query.password) return callback(null, html);

    if(req.query.password !== '') return callback(new Error('invalid password'));

    const sendDate = moment()
      .startOf('week')
      .add(7, 'days')
      .add(14, 'hours');

    mailchimp({
      title: `eventsbne weekly ${sendDate.format('YYYY-MM-DD')}`,
      subject: req.query.subject,
      name: 'Ash Kyd',
      html: html,
      postAt: sendDate.toISOString(),
      replyto: req.query.replyto,
      key: req.query.key,
      list: req.query.list,
    }, (error, response) => {
      callback(error, {
       "messages": [
         {"text": `Successfully scheduled campaign for ${sendDate.toISOString(true)}`},
       ]
      })
    });
  });
}

module.exports = {
  main: (req, res) => {
    go(req, (error, response) => {
      if(error) {
        console.error(error);
        res.status(200);
        return res.send({
          messages: [{ text: error.message }],
        });
      }
      res.status(200);
      return res.send(response);
    });
  }
}
