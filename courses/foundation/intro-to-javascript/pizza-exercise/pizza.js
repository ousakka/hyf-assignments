console.log("I love pizza");

const pizzaName = "Margherita";
const pizzaPrice = 100;
const pizzasAmount = 5;
const takeaway = true;
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
