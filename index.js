import axios from "axios";
import express from "express";
const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static('public'));

const apiUrl = "https://api.jikan.moe/v4/random/anime";

app.get('/', async(req, res) => {
  try{
    const response = await axios.get(apiUrl);
    const data = response.data.data;
    // const img = data.images.jpg.large_image_url;
    res.render("index.ejs", {data: data});
  } catch(error){
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})