require('dotenv').config();
const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY;

const mail = async (id, name, email, code) => {
  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
    {
      'subject':'Please verify your DeepSpace Account',
      'sender' : {'email':'deepspace.office@gmail.com', 'name':'DeepSpace'},
      'replyTo' : {'email':'deepspace.office@gmail.com', 'name':'DeepSpace'},
      'to' : [{'name': name, 'email': email}],
      'htmlContent' : '<html><body><h1>Hello! Welcome to DeepSpace! Please click the button down below to verify your account! </h1><br/><a href="deepspace-testing.up.railway.app/user/verifyEmail?code={{code}}&id={{id}}></a><br/> <p>You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" href="https://deepspace-testing.up.railway.app/privacypolicy">Privacy policy</a></p><br/><a target="_blank" href="https://deepspace-testing.up.railway.app/"><img src="https://yrlnng.stripocdn.email/content/guids/6aafc857-4f28-47b0-b93a-c527cb0a8d5f/images/favicon.png" alt width="125" style="display: block;"></a></body></html>',
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