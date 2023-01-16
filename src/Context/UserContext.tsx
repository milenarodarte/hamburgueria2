import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import {
  iDefaultLoginRequest,
  iDefaultProviderProps,
  iDefaultUser,
  iDataLogin,
  iDataRegister,
  iDataRegisterReceive,
  iCartResponse,
} from "./@types";
import { iCartContext } from "./CartContext";
interface iUserContext {
  handleLogin: (data: iDataLogin) => void;
  URLbase: string;
  registerFunction: (data: iDataRegister) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: iDefaultUser | null;
  products: iCartResponse[];
}

export const userContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const navigate = useNavigate();
  const [userData, setUser] = useState<iDefaultUser | null>(null);
  const URLbase = "hamburgueria-kenzie-v2.herokuapp.com";
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<iCartResponse[]>([]);

  const handleLogin = async (data: iDataLogin) => {
    try {
      await axios
        .post<iDefaultLoginRequest>(
          `https://hamburgueria-kenzie-v2.herokuapp.com/login`,
          data
        )
        .then((response) => {
          const token = response.data.accessToken;

          localStorage.setItem("@token", token);
          const user = response.data.user;
          setUser(user);
          const userJson = JSON.stringify(user);
          localStorage.setItem("@user", userJson);

          navigate("/");
        });
    } catch (err) {
      setUser(null);
      toast.error("usuário ou senha incorretos");
      console.log(err);
    }
  };

  useEffect(() => {
    async function loadUser() {
      const tokenValidation = localStorage.getItem("@token");

      if (!tokenValidation) {
        setLoading(false);
      }
      try {
        const { data } = await axios.get(
          "https://hamburgueria-kenzie-v2.herokuapp.com/products",
          {
            headers: { Authorization: `Bearer ${tokenValidation}` },
          }
        );

        setProducts(data);
      } catch (error) {
        setUser(null);
        console.log(error);
      } finally {
        setLoading(true);
      }
    }
    loadUser();
  }, []);

  const registerFunction = (data: iDataRegister) => {
    if (data.password === data.confirmPassword) {
      const { confirmPassword, ...newData } = data;

      axios
        .post<iDataRegisterReceive>(
          `https://hamburgueria-kenzie-v2.herokuapp.com/users`,
          newData
        )
        .then((response) => {
          toast.success("usuário criado com sucesso");
        })
        .catch((err) => {
          toast.error("Não foi possível criar o usuário");
          console.log(err);
        });
    } else {
      toast.error("senhas não são iguais");
    }
  };
  return (
    <userContext.Provider
      value={{
        registerFunction,
        handleLogin,
        URLbase,
        loading,
        setLoading,
        userData,
        products,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
