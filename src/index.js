import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controller/postController.js";

const port = 3000;

const app = express();

app.use(express.json());
// app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("home");
});

app.get("/about", (req, res) => {
  const id = req.query.id;
  console.log("id = ", id);
  return res.json({ message: "about", id: id ?? "no id" });
});

app.get("/contact", (req, res) => {
  return res.json({ message: "contact" });
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  const body = req.body;
  console.log("req body", req.body);
  console.log("req query", req.query);
  return res.json({
    message: "GET: hello world" + "name: " + name,
  });
});

app.post("/hello", (req, res) => {
  return res.json({ message: "POST: hello world" });
});

app.put("/hello", (req, res) => {
  return res.json({ message: "PUT: hello world" });
});

app.delete("/hello", (req, res) => {
  return res.json({ message: "DELETE: hello world" });
});

const m1 = (req, res, next) => {
  console.log("middleware 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("middleware 2");
  next();
};

const m3 = (req, res, next) => {
  console.log("middleware 3");
  next();
};

app.post("/post", m1, m2, m3, createPost);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
