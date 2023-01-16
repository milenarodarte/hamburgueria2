import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { create } from "yup/lib/array";
import { iCartResponse, iDefaultProviderProps } from "./@types";
import { useContext } from "react";
import { userContext } from "./UserContext";

export interface iCartContext {
  handleClickToCart: (obj: iCartResponse) => void;
  modalON: boolean;
  setModalON: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<iCartResponse[]>>;
  cart: iCartResponse[];
  cartFull: boolean;
  counterValue: number;
  setCounterValue: React.Dispatch<React.SetStateAction<number>>;
}
export const cartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iDefaultProviderProps) => {
  const [cart, setCart] = useState<iCartResponse[]>([]);
  const [modalON, setModalON] = useState<boolean>(false);
  const [cartFull, setCartFull] = useState<boolean>(false);
  const { products } = useContext(userContext);
  const [counterValue, setCounterValue] = useState(0);
  let total = 0;
  useEffect(() => {
    const totalValue = cart.reduce((a, b) => a + b.price, total);
    setCounterValue(totalValue);
  }, [cart]);

  useEffect(() => {
    if (cart.length === 0) {
      setCartFull(false);
    } else {
      setCartFull(true);
    }
  }, [cart]);

  function handleClickToCart(obj: iCartResponse) {
    const el = obj.id;

    const result = products.find((lanche) => {
      return lanche.id === Number(el);
    });

    if (result) {
      const verifyCart = cart.find(
        (product: iCartResponse) => product.id === Number(el)
      );
      if (verifyCart === undefined) {
        setCart((oldCarts) => [...oldCarts, obj]);
      } else {
        toast.error("Produto já adicionado, altere a quantidade no carrinho.");
      }
    }
  }

  const token: string | null = localStorage.getItem("@token");

  return (
    <cartContext.Provider
      value={{
        handleClickToCart,
        modalON,
        setModalON,
        cart,
        setCart,
        cartFull,
        counterValue,
        setCounterValue,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
