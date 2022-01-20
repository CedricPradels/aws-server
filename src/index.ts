import express from "express";

const app = express();

const PORT = 4000;

app.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server's running: http://localhost:${PORT}`);
});
