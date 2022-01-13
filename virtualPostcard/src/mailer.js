require('dotenv').config();

const nodemailer = require('nodemailer');
//same as const google = require('googleapis').google;
const {google} = require('googleapis');

const CLIENT_ID = '903009686024-2k3gttt60j3ndld0f7eqpj1nk05bpk5v.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04oofkG1o7hOLCgYIARAAGAQSNwF-L9IrQUa2K_Dx5IcbaI4uXpkHPMXDwfY7NuMeFh0VZEvt2f-wW1AOGWoahdQHtDotsj1JmUI';


//OAuth2 allows you to make API calls on behalf of the user
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

//set refresh_token at a later time
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

async function sendMail() {
  try {
    //wait for the requested access token(it grants access to the API)
    const accessToken = await oAuth2Client.getAccessToken();

    //setup the smtp(to send/receive mail) transport
    var transport = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      auth: {
        type: 'OAuth2',
        user: "virtualpostcard12@gmail.com",
        clientId : CLIENT_ID,
        clientSecret : CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    //objects to be sent
    const options = {
      from: 'virtualPostcard <virtualpostcard12@gmail.com>',
      to: "yushiko444@yahoo.com",
      subject: "Sending",
      text: "yepp",
      html: '<h1>Hello world</h1>'
    };

    //use transport data to send objects
    const result = await transport.sendMail(options);
    return result;

  }catch(error) {
    return error;
  }
};

//run sendMail function then log sent if successful, log error if not
sendMail().then(result => console.log('sent', result))
.catch(error => console.log(error));
