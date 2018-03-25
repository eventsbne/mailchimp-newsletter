Chatbot interface for eventsbne newsletter
==========================================

Writing a newsletter is hard. It's a bit easier when you have a chatbot
prompting you to fill in the blanks.

This script is pretty custom, but might be useful for you. It builds on Mailchimp's [modular blueprints](https://github.com/mailchimp/email-blueprints/) and fills in the blanks based on values from query params to make up a HTML email.

The `mailchimp.js` file creates a campaign and schedules it to send at 2PM Sunday.

Setup
=====

Things to do:

1. Set a password in index.js (yeah)
2. Set up a form, chatfuel block, whatever to post to the endpoint

You can preview the email wth the following params:
```
https://myfunction/?intro=&pic=&name=&subject=&footer=
```

And submit the email with these additional params:

```
&password=&key=&replyto=&list=
```

Password matches the one set in `index.js`, key is your MailChimp API key, list is the web ID for the list you want to send.
