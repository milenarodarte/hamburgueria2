import FormRegister from "../../Components/FormRegister";
import DivRegister from "../../Styles/DivRegister";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import shopBag from "../../Assets/shopBag.svg";
import dots from "../../Assets/dots.svg";
import textLogin from "../../Assets/textLogin.svg";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <DivRegister>
        <div className="left">
          <div className="leftContainer">
            <img src={logo} alt="logoHamburgueria" className="logo" />
            <div className="shopSquare">
              <div className="greenSquare">
                <img className="shopCart" src={shopBag} alt="shopBag" />
              </div>
              <img
                src={textLogin}
                alt="texto propaganda"
                className="textLogin"
              />
            </div>
            <img src={dots} alt="dotsDecoration" className="dots" />
          </div>
        </div>
        <div className="right">
          <div className="formContainer">
            <div className="divCadastro">
              <h1>Cadastro</h1>
              <button
                className="returnToLogin"
                onClick={() => navigate("/login")}
              >
                Retornar para o login
              </button>
            </div>
            <FormRegister />
          </div>
        </div>
      </DivRegister>
    </div>
  );
};
export default Register;
