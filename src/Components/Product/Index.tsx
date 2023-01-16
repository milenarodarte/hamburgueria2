import { useContext } from "react";
import { iCartResponse, iObjType } from "../../Context/@types";
import CardContainer from "../../Styles/Card";
import Div from "../../Styles/CardAside";
import DivProducts from "../../Styles/DivProducts";
import Button from "../Button/Index";
import { userContext } from "../../Context/UserContext";
import { cartContext } from "../../Context/CartContext";

const Product = ({ obj }: iObjType) => {
  const { handleClickToCart } = useContext(cartContext);
  return (
    <CardContainer>
      <img src={obj.img} alt="foto produto"></img>
      <div className="divText">
        <p className="title">{obj.name}</p>
        <p className="category">{obj.category}</p>
        <p className="price">R$ {obj.price}</p>
        <Button className="btn" onClick={() => handleClickToCart(obj)}>
          Adicionar
        </Button>
      </div>
    </CardContainer>
  );
};
export default Product;
