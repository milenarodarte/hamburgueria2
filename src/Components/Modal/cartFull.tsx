import ContainerCartFull from "../../Styles/CartFullStyled";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import Cart from "./Index";
import CardAside from "../CardCart.ts/Index";
import Button from "../Button/Index";
const CartFull = () => {
  const { setModalON, cart, counterValue, setCart } = useContext(cartContext);

  return (
    <ContainerCartFull>
      <div className="cartFull">
        <header className="headerModal">
          <h2 className="cartTitle">Carrinho de compras</h2>
          <button className="close" onClick={() => setModalON(false)}>
            X
          </button>
        </header>
        <div className="mainCart">
          <div className="cardsCart">
            {cart.map((obj) => (
              <CardAside obj={obj} />
            ))}
          </div>
          <div className="divTotal">
            <p className="total">Total</p>
            <p className="totalNumber"> R$ {counterValue}</p>
          </div>
          <Button className="btnRemoveAll" onClick={() => setCart([])}>
            Remover todos
          </Button>
        </div>
      </div>
    </ContainerCartFull>
  );
};
export default CartFull;
