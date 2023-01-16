import DivContainer from "../../Styles/DivContainer";
import FormLogin from "../../Components/Form Login";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Index";
import logo from "../../Assets/logo.svg";
import shopBag from "../../Assets/shopBag.svg";
import dots from "../../Assets/dots.svg";
import textLogin from "../../Assets/textLogin.svg";
import { userContext } from "../../Context/UserContext";
const Login = () => {
  const navigate = useNavigate();

  return (
    <DivContainer>
      <div className="left">
        <div className="formContainer">
          <h1>Login</h1>
          <FormLogin />
          <p className="createAccount">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <Button
            className="registerButton"
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={logo} alt="logoHamburgueria" className="logo" />
        <div className="shopSquare">
          <div className="greenSquare">
            <img className="shopCart" src={shopBag} alt="shopBag" />
          </div>
          <img src={textLogin} alt="texto propaganda" className="textLogin" />
        </div>
        <img src={dots} alt="dotsDecoration" className="dots" />
      </div>
    </DivContainer>
  );
};
export default Login;
