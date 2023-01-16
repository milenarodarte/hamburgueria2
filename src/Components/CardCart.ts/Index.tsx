import DivCart from "../../Styles/CardAside";
import Button from "../Button/Index";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { toast } from "react-toastify";
import { iCartResponse, iObjType } from "../../Context/@types";
function CardAside({ obj }: iObjType) {
  const [counter, setCounter] = useState(1);
  const { setCart, counterValue, setCounterValue } = useContext(cartContext);

  return (
    <DivCart>
      <div className="imgBorder">
        <img src={obj.img} alt="imagem do produto" />
      </div>
      <div className="cartElements">
        <div className="cartTexts">
          <p className="name">{obj.name}</p>
          <p className="category">{obj.category}</p>
        </div>
        <div className="cartRemove">
          <Button className="remove" type="button">
            Remover
          </Button>
          <div className="divCounter">
            <button className="buttonSetCounter">-</button>
            <p className="counter">{counter}</p>
            <button className="buttonSetCounter" type="button">
              +
            </button>
          </div>
        </div>
      </div>
    </DivCart>
  );
}
export default CardAside;
