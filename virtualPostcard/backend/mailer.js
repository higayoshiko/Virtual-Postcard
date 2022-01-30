import nodemailer from 'nodemailer';
//same as const google = require('googleapis').google;
import {google} from 'googleapis';

import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});


//OAuth2 allows you to make API calls on behalf of the user
const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI);

//set refresh_token at a later time
oAuth2Client.setCredentials({refresh_token: process.env.OAUTH_REFRESH_TOKEN});

async function sendMail() {
  try {
    //wait for the requested access token(it grants access to the API)
    const accessToken = await oAuth2Client.getAccessToken();

    //setup the smtp(to send/receive mail) transport
    const transport = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId : process.env.OAUTH_CLIENTID,
        clientSecret : process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
