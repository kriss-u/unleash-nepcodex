require("dotenv").config();
const unleash = require("unleash-server");

unleash
  .start({
    db: {
      ssl: false,
      host: process.env.UNLEASH_DB_HOST,
      port: +process.env.UNLEASH_DB_PORT,
      database: process.env.UNLEASH_DB,
      user: process.env.UNLEASH_DB_USER,
      password: process.env.UNLEASH_DB_PASS,
    },
    server: {
      port: +process.env.UNLEASH_SERVER_PORT,
    },
  })
  .then((unleash) => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get("port")}`
    );
  });
