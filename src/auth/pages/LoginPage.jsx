import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersActive } from "../../assets/userDb";
import { useForm } from "../../hooks/useForm";
import { useStories } from "../../hooks/useStories";

export const LoginPage = () => {
  const { onInputChange, onResetForm, user, password } = useForm({
    user: "",
    password: "",
  });
  const { onLogin } = useStories();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "USUARIO INVALIDO",
    pass: "CONTRASEÑA INVALIDA",
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = usersActive.find((value) => value.user === user);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ name: "pass", message: errors.pass });
        return;
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
      return;
    }
    onLogin(userData);
    onResetForm();
    navigate("/", {
      replace: true,
    });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="login__error">{errorMessages.message}</div>
    );

  return (
    <div className="login__app">
      <div className="login-form">
        <div className="login__title">Logearse</div>
        <div className="login__form">
          <form onSubmit={handleSubmit}>
            <div className="login__input-container">
              <label>USUARIO </label>
              <input
                type="text"
                name="user"
                required
                className="login__input"
                value={user}
                onChange={onInputChange}
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="login__input-container">
              <label>CONTRASEÑA </label>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={onInputChange}
                className="login__input"
              />
              {renderErrorMessage("pass")}
            </div>
            <div className="login__button-container">
              <input type="submit" className="login__input-btn" />
            </div>
          </form>
        </div>
        {isSubmitted && <div>USUARIO INGRESO CON EXITO</div>}
      </div>
    </div>
  );
};
