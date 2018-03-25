const Mailchimp = require('mailchimp-api-v3');

module.exports = function({key, replyto, list, title, name, subject, html, postAt}, callback){
  const mailchimp = new Mailchimp(key);
  let campaign;

  mailchimp.get('/lists')
    .then(lists => {
      return lists.lists.find(list => list.web_id === 240561).id;
    })
    .then(listId => mailchimp.post('/campaigns', {
      type: 'regular',
      recipients: {
        list_id: listId,
      },
      settings: {
        subject_line: subject,
        title: title,
        from_name: name,
        reply_to: replyto,
      }
    }))
    .then(c => {
      campaign = c;
      console.log('set up campaign', c.id, c.web_id);
      return mailchimp.put(`/campaigns/${c.id}/content`, { html });
    })
    .then(() => {
      console.log('scheduling post');
      return mailchimp.post(`/campaigns/${campaign.id}/actions/schedule`, { schedule_time: postAt });
    })
    .then(success => callback(null, success))
    .catch(callback);
}
