import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartItem from "./CartItem";

function CartTable() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <table className="shop-table">
        <thead>
          <tr>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody className="cart-wrapper">
          {cartItems.map((item, index) => (
            <CartItem cartItem={item} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CartTable;
