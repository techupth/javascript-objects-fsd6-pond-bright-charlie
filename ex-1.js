let foodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};

console.log(foodOrder);
foodOrder["totalPrice"] = 5000;
foodOrder.paymentType = "Credit Card";

console.log(foodOrder);
