require("dotenv").config();
const { createApp } = require("@unleash/proxy");
const port = +process.env.UNLEASH_PROXY_PORT || 3000;

console.log(process.env.UNLEASH_PROXY_PORT);
const app = createApp({
  unleashUrl: process.env.UNLEASH_API_URL,
  unleashApiToken: process.env.UNLEASH_API_KEY,
  clientKeys: [process.env.WEB_PROXY_SECRET],
  refreshInterval: 1000,
});

app.listen(port, () =>
  console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`)
);
