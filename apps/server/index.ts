import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors({ origin: "localhost:3000" }));

app.use(bodyParser.urlencoded({ extended: false }));

import toolsRoutes from "./routes/toolsRoutes";

app.get("/", (_, res) => res.send("Hello from NepCodeX"));

app.use("/tools", toolsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
