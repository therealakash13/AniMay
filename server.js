import express from "express";
import axios, { HttpStatusCode } from "axios";
import morgan from "morgan";
import ejs from "ejs";
import bodyParser from "body-parser";
import https from "https";
// import dns from "dns";
// dns.setDefaultResultOrder("ipv6first");

const server = express();
const port = 3000;
const hostname = "https://localhost";
const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  http: new https.Agent({ family: 6 }), // Force ipv6
});

// Middlewares
server.use(express.static("public")); // Static file location
server.use(morgan("tiny")); // Logging
server.set("view engine", "ejs"); // Setting view engine to EJS
server.use(bodyParser.urlencoded({ extended: true })); // Parsing body in the response

// Routes
server.get("/", async(req, res) => {
  try {
    const result = await api.get("/watch/promos");
    return res.render("index",{promos:result.data.data});
  } catch (error) {
    console.error(error.message||error.code);
    return res.status(500).json({ message: "Failed to fetch data." });
  }
});

server.get("/search", async (req, res) => {
  const searchString = req.query.query || "";
  const page_num = Number(req.query.page) || 1;

  try {
    const response = await api.get("/anime", {
      params: {
        page: page_num,
        limit: 12,
        q: searchString,
      },
    });

    return res.render("search", {
      results: response.data.data,
      pagination: response.data.pagination,
      search: searchString,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to search anime" });
  }
});

server.get("/anime/:id", async (req, res) => {
  const animeId = req.params.id;
  try {
    const response = await api.get(`/anime/${animeId}`);
    return res.render("animePage", { anime: response.data.data });
  } catch (error) {
    console.error("Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch anime.",
      error_message: error.message,
      stack: error.stack,
    });
  }
});

server.get("/anime/:id/characters", async (req, res) => {
  const animeId = req.params.id;
  try {
    const response = await api.get(`/anime/${animeId}/characters`);
    return res.render("characters", { characters: response.data.data });
  } catch (error) {
    console.error("Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch characters.",
      error_message: error.message,
      stack: error.stack,
    });
  }
});

server.get("/toprated", async (req, res) => {
  const page_num = Number(req.query.page) || 1;
  try {
    const response = await api.get("/top/anime", {
      params: { limit: 12, page: page_num },
    });
    return res.render("toprated", {
      results: response.data.data,
      pagination: response.data.pagination,
    });
  } catch (error) {
    console.error("Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch toprated.",
      error_message: error.message,
      stack: error.stack,
    });
  }
});

server.get("/recommendation", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/recommendations/anime",
      {
        params: {
          page: 1,
        },
      }
    );
    return res.render("recommendation", {
      recommendations: response.data.data,
      pagination: response.data.pagination,
    });
  } catch (error) {
    console.error("Error:", error.code || error.message);

    return res.status(500).json({
      message: "Failed to fetch recommendations.",
      error_message: error.message,
      stack: error.stack,
    });
  }
});

server.get("/about", (req, res) => {
  return res.render("about");
});

// Listner
server.listen(port, (error) => {
  if (error) {
    console.error("Error in server:", error.code || error.message);

    return res.status(500).json({
      message: "Error starting server.",
      error_message: error.message,
      stack: error.stack,
    });
  }
  console.log(`server is running at ${hostname}:${port}`);
});
