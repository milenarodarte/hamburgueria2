import ContainerCartEmpity from "../../Styles/CartEmpityStyled";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
const CartEmpity = () => {
  const { setModalON } = useContext(cartContext);
  return (
    <ContainerCartEmpity>
      <div className="cartEmpity">
        <header>
          <h2 className="cartTitle">Carrinho de compras</h2>
          <button className="close" onClick={() => setModalON(false)}>
            X
          </button>
        </header>
        <div className="divEmpityCart">
          <h2 className="h2EmpityCart">Sua sacola está vazia</h2>
          <p className="addItens">Adicione itens</p>
        </div>
      </div>
    </ContainerCartEmpity>
  );
};
export default CartEmpity;
