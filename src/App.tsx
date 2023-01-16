import { RoutesMain as Routes } from "./Routes/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { UserProvider } from "./Context/UserContext";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <Routes />
          <ToastContainer />
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
