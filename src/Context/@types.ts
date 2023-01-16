import React from "react";

export interface iDefaultProviderProps {
  children: React.ReactNode;
}
export interface iDefaultUser {
  id: string;
  name: string;
  email: string;
}
export interface iDefaultLoginRequest {
  accessToken: string;
  user: iDefaultUser;
}
export interface iDataProps {
  data?: {
    email: string;
    password: string;
  };
}
export interface iDataLogin {
  email: string;
  password: string;
}
export interface iDataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iDataRegisterReceive {
  acessToken: string;
  user: iDefaultUser;
}
export interface iCartResponse {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface iObjType {
  obj: iCartResponse;
}
