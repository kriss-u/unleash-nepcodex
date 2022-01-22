import { Router } from "express";
import unleash from "../lib/unleash";

const router = Router();

router.post("/email-validator", (req, res, next) => {
  if (unleash.isEnabled("email-validator")) {
    const email = req.body.email;
    let response: Object;
    let pattern: RegExp;
    if (!email) {
      response = { code: 400, message: "Email address is required." };
      res.status(400).json(response);
    } else {
      const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = pattern.test(email);
      // const variant = unleash.getVariant("email-validator");
      // console.log(variant);
      // if (variant.name == "basic") {
      //   pattern = /@/;
      //   isValid = pattern.test(email);
      // } else if (variant.name == "advanced") {
      //   pattern =
      //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   isValid = pattern.test(email);
      // }
      if (isValid) {
        response = {
          code: 200,
          message: "Email address is valid",
          email: email,
        };
      } else {
        response = {
          code: 200,
          message: "Email address is invalid",
          email: email,
        };
      }
      res.json(response);
    }
  }
  next();
});

export default router;
