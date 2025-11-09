console.log("I love pizza");

let pizzaName = "Margherita";
let pizzaPrice = 100;
let pizzasAmount = 5;
let takeaway = true;
let totalPrice = pizzaPrice * pizzasAmount;
let orderType;

if (takeaway) {
  orderType = "Yes";
} else {
  let orderType = "No";
}

console.log(
  "Takeaway: " +
    orderType +
    " : " +
    pizzasAmount +
    " " +
    pizzaName +
    ". Total cost for the order is " +
    totalPrice +
    " kr."
);
