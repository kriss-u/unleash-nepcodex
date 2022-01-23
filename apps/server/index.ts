import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import unleash from "./lib/unleash";

unleash.on("synchronized", () => {
  console.log(`Synchronized! on ${new Date().toLocaleString()}`);
});

import toolsRoutes from "./routes/toolsRoutes";

const app = express();
app.use(cors());

const PORT = +process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_, res) => res.send("Hello from NepCodeX"));

app.use("/tools", toolsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
