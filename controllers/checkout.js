const Checkout = require("../models/checkout");
exports.addressDetails = (req, res) => {
  const { addressDetails } = req.body;
  Checkout.findOne({ user: req.user.id }, (err, checkout) => {
    if (err) {
      return res.status(400).json({
        message: "an error occured",
      });
    }
    if (!checkout) {
      let newcheckoutlist = new Checkout({
        address: true,
        addressDetails,
      });
      newcheckoutlist
        .save()
        .then(() => {
          res.status(200).json({
            message: "Address received",
          });
        })
        .catch(() => {
          res.status(400).json({
            message: "an error occured",
          });
        });
    }
    if (checkout) {
      checkout.addressDetails = req.body.addressDetails;
      checkout
        .save()
        .then(() => {
          res.status(200).json({
            message: "Address received",
          });
        })
        .catch(() => {
          res.status(400).json({
            message: "an error occured",
          });
        });
    }
  });
};

exports.checkoutDelivery = (req, res) => {
  const { deliveryMethod } = req.body;
  Checkout.findOne({ user: req.user.id }, (err, checkout) => {
    if (err) {
      return res.status(400).jsnon({
        message: "an errror occured",
      });
    }
    if (checkout) {
      checkout.deliveryMethod = deliveryMethod;
      checkout
        .save()
        .then(() => {
          res.status(200).json({
            message: "deliever method received",
          });
        })
        .catch(() => {
          res.status(400).json({
            message: "an error occured",
          });
        });
    }
  });
};
exports.paymentMethod = (req, res) => {
  const { paymentMethod } = req.body;
  Checkout.findOne({ user: req.user.id }, (err, checkout) => {
    if (err) {
      return res.status(400).jsnon({
        message: "an errror occured",
      });
    }
    if (checkout) {
      checkout.paymentMethod = paymentMethod
      checkout
        .save()
        .then(() => {
          res.status(200).json({
            message: "payment method received",
          });
        })
        .catch(() => {
          res.status(400).json({
            message: "an error occured",
          });
        });
    }
  });
};
