import { useContext, useEffect } from "react";
import { userContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Product from "../../Components/Product/Index";
import { iCartResponse, iObjType } from "../../Context/@types";
import Header from "../../Components/Header";
import Main from "../../Styles/divMain";
import { cartContext } from "../../Context/CartContext";
import Cart from "../../Components/Modal/Index";

const Home = () => {
  const navigate = useNavigate();
  const { loading, userData, products } = useContext(userContext);
  const { modalON } = useContext(cartContext);

  useEffect(() => {
    if (loading) {
      return;
    } else {
      if (userData === null) {
        navigate("/login");
      } else {
        return;
      }
    }
  }, []);

  return (
    <div>
      {modalON ? <Cart /> : null}
      <Header />
      <Main>
        {products.map((obj: iCartResponse) => {
          return <Product obj={obj} key={obj.id} />;
        })}
      </Main>
    </div>
  );
};

export default Home;
