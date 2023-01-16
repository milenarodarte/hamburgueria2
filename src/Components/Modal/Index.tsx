import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import CartEmpity from "./cartEmpity";
import CartFull from "./cartFull";
const Cart = () => {
  const { cart, cartFull } = useContext(cartContext);

  if (cartFull === false) {
    return <CartEmpity />;
  } else {
    return <CartFull />;
  }
};
export default Cart;
