import MainLoggedOutStyled from "../../Styles/mainLoggedOutStyled";
import Button from "../Button/Index";
import FormLogin from "../Form Login";
const MainLoggedOut = () => {
  return (
    <MainLoggedOutStyled>
      <div className="rightLogin">
        <p>Login</p>
        <FormLogin />
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Button>Cadastrar</Button>
      </div>
    </MainLoggedOutStyled>
  );
};
export default MainLoggedOut;
