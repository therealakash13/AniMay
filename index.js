import express from "express";
import axios, { HttpStatusCode } from "axios";
import morgan from "morgan";
import ejs from "ejs";
import bodyParser from "body-parser";
import https from "https";
import dns from "dns";
dns.setDefaultResultOrder("ipv6first");

const app = express();
const port = 3000;
const hostname = "https://localhost";
const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  http: new https.Agent({ family: 4 }),
});

// Middlewares
app.use(express.static("public"));
app.use(morgan("tiny"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/search", (req, res) => {
  return res.render("search");
});

app.get("/anime/:id", async (req, res) => {
  const animeId = req.params.id;
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${animeId}`
    );
    return res.render("animePage", { anime: response.data.data });
  } catch (error) {
    console.log("Error", error.message);
  }
});

app.get("/anime/:id/characters", async (req, res) => {
  const animeId = req.params.id;
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${animeId}/characters`
    );
    return res.render("characters", { characters: response.data.data });
  } catch (error) {
    console.log("Error", error.message);
  }
});

app.post("/search", async (req, res) => {
  const searchString = req.body.search;
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime", {
      params: {
        page: 1,
        limit: 9,
        q: searchString,
      },
    });
    return res.render("search", { results: response.data.data });
  } catch (error) {
    console.error("Jikan API Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch anime",
      error: error,
    });
  }
});

app.get("/toprated", async (req, res) => {
  // const searchString = req.body.search;
  try {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
      params: {
        limit: 12,
      },
    });
    return res.render("toprated", { results: response.data.data });
  } catch (error) {
    console.error("Jikan API Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch anime",
      error: error,
    });
  }
});

app.get("/recommendation", async (req, res) => {
  // const searchString = req.body.search;
  try {
    const response = await axios.get("https://api.jikan.moe/v4/recommendations/anime", {
      params: {
        page: 1,
      },
    });

    console.log(response.data.data);
    
    return res.render("recommendation", { recommendations: response.data.data });
  } catch (error) {
    console.error("Jikan API Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch anime",
      error: error,
    });
  }
});

// Listner
app.listen(port, (err) => {
  if (err) {
    console.log(`Error while running the App: ${err.message}`);
  }
  console.log(`App is running at ${hostname}:${port}`);
});
