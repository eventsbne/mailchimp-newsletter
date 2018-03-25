const index = require('./');

index.main({
  query: {
    intro: 'hello world',
    subject: 'email subject',
    name: 'Ash Kyd',
    footer: 'more info here!',
    key: '',
    replyto: 'ash@kyd.com.au',
    list: '',
    password: '',
  }
},{
  status: console.log,
  send: console.log
})
