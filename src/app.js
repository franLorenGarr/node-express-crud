import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import morgan from "morgan";

import path from "path";
const app = express();

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    //layoutsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
//midlwares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes

app.use(indexRoutes);

//static files

app.use(express.static(path.join(__dirname, "public")));

export default app;
