const express = require("express");
const app = express();
const cors = require("cors");
const { getDatabase } = require("firebase-admin");
const { adminApp } = require("./firebaseAdmin");

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api", async (req, res) => {
  console.log("initalized admin");
  const db = adminApp.database();
  console.log("admin database connected");

  const ref = db.ref("steps");
  console.log("referenced steps");
  const body = req.body;
  body.timestamp = Date.now();
  await ref.push(body);

  res.json({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
