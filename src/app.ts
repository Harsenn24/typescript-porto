import express, { Express } from "express";
import connectDB from "./config/db";
import router from "./router/routes";

//set body parser

const app: Express = express();
app.use(express.json());

app.use(router);

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
