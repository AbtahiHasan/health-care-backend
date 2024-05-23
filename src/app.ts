import express, { Application } from "express";
import morgan from "morgan";
import UserRoutes from "./app/modules/user/user.routes";
const app: Application = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/v1/user", UserRoutes);
app.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

export default app;
