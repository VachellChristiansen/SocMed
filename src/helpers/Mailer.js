require('dotenv').config();
const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY;

const mail = async (user) => {
  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
    {
      'subject':'Hello from the Node SDK!',
      'sender' : {'email':'deepspace.office@gmail.com', 'name':'Sendinblue'},
      'replyTo' : {'email':'deepspace.office@gmail.com', 'name':'Sendinblue'},
      'to' : [{'name': user.username, 'email': user.email}],
      'htmlContent' : '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
      'params' : {'bodyMessage':'Made just for you!'}
    }
  ).then(function(data) {
    console.log(data);
  }, function(error) {
    console.error(error);
  });
}

module.exports = {
  mail
}