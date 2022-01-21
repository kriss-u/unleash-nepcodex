import { Router } from "express";

const router = Router();

router.get("/email-validator", (_, res) => {
  const email = "valid@nepcodex.com";
  const valid = email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (valid) {
    res.send("Valid");
  } else {
    res.send("Not valid");
  }
});

export default router;
