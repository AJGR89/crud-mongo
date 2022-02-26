import path from "path";
import express from "express";
import { create } from 'express-handlebars';
import indexRoutes from "./routes/index.routes";


const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);

app.set("view engine", ".hbs");

//routes
app.use(indexRoutes);

export default app;
