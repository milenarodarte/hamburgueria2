import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button/Index";
import { useContext, useState } from "react";
import { userContext } from "../../Context/UserContext";
import { iDataLogin } from "../../Context/@types";

const FormLogin = () => {
  const { handleLogin } = useContext(userContext);
  const [loading, setLoading] = useState(false);

  const FormSchema = yup.object().shape({
    email: yup.string().required("email obrigatório").email(),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iDataLogin>({
    resolver: yupResolver(FormSchema),
  });

  const submit = (data: iDataLogin) => {
    handleLogin(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <fieldset>
        <legend>E-mail</legend>
        <input
          {...register("email")}
          type="email"
          placeholder="Digite seu email"
        />
      </fieldset>
      {errors?.email && <p className="error">{errors.email.message}</p>}
      <fieldset>
        <legend>Senha</legend>
        <input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />
      </fieldset>
      {errors?.password && <p className="error">{errors.password.message}</p>}
      <Button type="submit" className="loginButton">
        Logar
      </Button>
    </form>
  );
};
export default FormLogin;
