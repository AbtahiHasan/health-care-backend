import { Server } from "http";
import app from "./app";
const port: number = 5000;

let server: Server;

const main = async () => {
  server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

main();
