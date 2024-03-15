import { createSelector } from "reselect";

const newCartCount = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity
);

const newCartTotal = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price
);
