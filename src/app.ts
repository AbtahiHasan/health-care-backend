import express, { Application } from "express";
import UserRoutes from "./app/modules/user/user.routes";
const app: Application = express();

app.use("/user", UserRoutes);
app.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

export default app;
