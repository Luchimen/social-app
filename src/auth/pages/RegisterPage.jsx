import { useState } from "react";
import Error from "../../helpers/error/Error";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    password: "",
  });
  const { name, password } = formState;
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);
    onResetForm();
  };
  return (
    <div className="register__form ">
      <form>
        {error && <Error>Ingrese todos los datos del formulario</Error>}

        <label className="register__input-container">Nombre</label>
        <input
          onChange={onInputChange}
          className="register__input"
          value={name}
          type="text"
          name="name"
        />

        <label className="register__input-container">Contraseña</label>
        <input
          onChange={onInputChange}
          className="register__input"
          value={password}
          type="password"
          name="password"
        />

        <label className="register__input-container"> Repetir Contraseña</label>
        <input
          onChange={onInputChange}
          className="register__input"
          value={password}
          type="password"
          name="password"
        />

        <div onClick={handleSubmit} className="register__button-container">
          <input type="submit" value="Registrar" className="register__btn" />
        </div>
      </form>
    </div>
  );
};
