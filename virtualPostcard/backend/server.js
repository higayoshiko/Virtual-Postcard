import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import https from 'https';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});

const app = express();
const port = 8000;

app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("views", "./public");

app.get("/getImagesArray", function(req, res) {
  //use hidden api key
  const keys = process.env.IMAGE_KEY;

  //searched item //////will update this
  let component = 'sunset';

  //will update this
  let page = '1';
  const url = `https://pixabay.com/api/?key=${keys}&q=${component}&image_type=photo&page=${page}`;

  https.get(url, function(response) {
    let result = "";
    //run when getting the data
    response.on("data", function(data) {
      //add result one by one to empty variable
      result += data;
    });

    //run at end of response
    response.on("end", function() {
        //parse result to JSON
        const parsed = JSON.parse(result);
        const hits = parsed["hits"];
        //store all the webformatURL of each
        let imagesArray = hits.map(item => item["webformatURL"]);
        // let imagesId = hits.map(item => item["id"]);

        console.log(imagesArray);
        res.send({ imagesArray });
    });
  });
});

app.listen(port, function() {
  console.log("server started");
});
