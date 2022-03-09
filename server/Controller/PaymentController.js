const Razorpay = require("razorpay");
const shortid = require("shortid");
const razorpay = new Razorpay({
  key_id: "rzp_test_KhYTiBkXohzomU",
  key_secret: "vyxbF25mY2AO8s1K5GVwlK0y",
});

exports.razorpayCon = async (req, res) => {
  const payment_capture = 1;
  const amount = 50;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};
