import express from "express";
import axios from "axios";
import morgan from "morgan";
import ejs from "ejs";

const app = express();
const port = 3000;
const hostname = "http://localhost";

// Middlewares
app.use(express.static("public"));
app.use(morgan("tiny"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  return res.render("index");
});

// Listner
app.listen(port, () => {
  //   if (err) {
  //     console.log(`Error while running the App: ${err.message}`);
  //   }
  console.log(`App is running at ${hostname}:${port}`);
});
