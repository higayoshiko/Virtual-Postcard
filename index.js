import express from 'express';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import * as path from 'path';

const app = express();

dotenv.config({ path: '../.env' });
app.use(express.json());
app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.post("/sendNodemailer", cors(), async function (req, res) {
  let { currentEmail, currentImage, currentName, currentMessage } = await req.body;

  //OAuth2 allows you to make API calls on behalf of the user
  const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI);

  //set refresh_token at a later time
  oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

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
          pass: process.env.PASS,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
          accessToken: accessToken
        }
      });

      //objects to be sent
      const options = {
        from: 'virtualPostcard <virtualpostcard12@gmail.com>',
        to: currentEmail,
        subject: "Hello " + currentName + ", your friend sent you a greeting!",
        html: '<p style="font-size:1.5em">' + currentMessage + '</p><br/><img src="'
          + currentImage + '" style="height:20em; width:30em;">'
      };

      //use transport data to send objects
      const result = await transport.sendMail(options);
      return result;

    } catch (error) {
      return error;
    }
  }


  //run sendMail function then log sent if successful, log error if not
  sendMail().then(result => { 
    res.json({ message: "Message sent", result });
    console.log('sent', result);
  })
    .catch(error => console.log("sent error", error));
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve("../build", 'index.html'));
});

app.listen(process.env.PORT || 8001, function () {
  console.log("server started");
});
