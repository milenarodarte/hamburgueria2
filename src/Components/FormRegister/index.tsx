import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button/Index";
import { iDataRegister } from "../../Context/@types";
import { userContext } from "../../Context/UserContext";
import { useContext } from "react";
const FormRegister = () => {
  const FormSchema = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
    email: yup.string().required("email obrigatório").email(),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string().required("confirmação obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iDataRegister>({
    resolver: yupResolver(FormSchema),
  });
  const { registerFunction } = useContext(userContext);

  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(registerFunction)}>
      <fieldset>
        <legend>Nome</legend>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
      </fieldset>
      {errors?.name && <p className="error">{errors.name.message}</p>}
      <fieldset>
        <legend>Email</legend>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
      </fieldset>
      {errors?.email && <p className="error">{errors.email.message}</p>}
      <fieldset>
        <legend>Senha</legend>

        <input
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
        />
      </fieldset>
      {errors?.password && <p className="error">{errors.password.message}</p>}
      <fieldset>
        <legend>Confirmar senha</legend>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirme a sua senha"
        />
      </fieldset>
      {errors?.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}
      <Button className="buttonSubmit" type="submit">
        Enviar
      </Button>
    </form>
  );
};
export default FormRegister;
