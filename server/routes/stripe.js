const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51KavoeKKJeUz3BI8pUNd6xUVtLST2JQbWiSULbYvHTHu7inYotnEeRpEUin8k5e4m0pdCj193F87FXlsLB96btd200qPg6tk8V"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
