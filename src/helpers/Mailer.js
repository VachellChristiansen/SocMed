require('dotenv').config();
const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY;

const mail = async (id, name, email, code) => {
  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
    {
      'subject':'Hello from the Node SDK!',
      'sender' : {'email':'deepspace.office@gmail.com', 'name':'Sendinblue'},
      'replyTo' : {'email':'deepspace.office@gmail.com', 'name':'Sendinblue'},
      'to' : [{'name': name, 'email': email}],
      'htmlContent' : '<html><body><h1>Click the button below to verify your email.</h1><br/><a href="deepspace-testing.up.railway.app/user/verifyEmail?code={code}&id={id}></a></body></html>',
      'params' : {'code': code , 'id': id}
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