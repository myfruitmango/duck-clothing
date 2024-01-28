import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Page Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, price } = cartItem;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Checkout;
