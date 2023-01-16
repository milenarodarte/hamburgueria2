import InputSearch from "../InputSearch";
import logOut from "../../Assets/logOut.svg";
import cartImg from "../../Assets/cartImg.svg";
import DivHeader from "../../Styles/header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import logo from "../../Assets/logo.svg";
import searchIcon from "../../Assets/searchGrey.svg";
import InputSearch2 from "../InputSearch2/Index";

import Button from "../Button/Index";
const Header = () => {
  const [input, setInput] = useState(false);
  const navigate = useNavigate();
  const { modalON, setModalON, cart } = useContext(cartContext);
  const [cartLength, setCartLength] = useState(cart.length);
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <DivHeader>
      {input ? (
        <div className="divContainerHeader">
          <InputSearch2 placeHolder="Digitar pesquisa " />
          <Button className="btnClose" onClick={() => setInput(false)}>
            X
          </Button>
        </div>
      ) : (
        <div className="divContainerHeader">
          <img className="logo" alt="logo" src={logo} />
          <div className="searchButtons">
            <Button className="btnSearch" onClick={() => setInput(true)}>
              <img src={searchIcon} alt="search" />
            </Button>

            <InputSearch placeHolder="Digitar Pesquisa" />

            <Button className="buttonCart" onClick={() => setModalON(true)}>
              <img src={cartImg} alt="cart" />{" "}
              <p className="counterCart">{cartLength}</p>{" "}
            </Button>
            <Button onClick={handleLogout} className="buttonLogout">
              <img src={logOut} alt="logout" />
            </Button>
          </div>
        </div>
      )}
    </DivHeader>
  );
};
export default Header;
