const User = require("../models/user/User");
let PayStack = require("paystack-node");
require("dotenv").config();
exports.payment = (req, res, next) => {
  let APIKEY = process.env.TESTPAYMENTKEY;
  const environment = process.env.NODE_ENV;
  const paystack = new PayStack(APIKEY, environment);
  const amount = req.body.amount * 100;
  const paystckpayment = paystack.initializeTransaction({
    amount,
    email: req.body.email,
  });
  paystckpayment
    .then(function (response) {
      res.json({
        data: response.body.data.authorization_url,
      });
    })
    .catch(function (error) {
      res.send(error);
    });
};

exports.addTosavings = (req, res, next) => {
  Admin.findById({ _id: req.body.admin._id }, (err, admin) => {
    if (err) {
      res.status(400).json({
        message: "error occured or admin not found",
        status: false,
      });
    } else {
      admin.activityLogs.push(req.body);
      admin.save();
      const { amount } = req.body;
      User.findOneAndUpdate(
        { _id: req.body.user._id },
        { SavingsActive: true, AddSaveRequest: false }
      )
        .then((response) => {
          response.savingBalance = response.savingBalance + amount;
          response.SavingsActive = true;
          user.save((response1) => {
            res.json({
              response,
              response1,
            });
          });
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
  
};
