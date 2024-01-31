import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./Login.css";
import Logo from "../Logo/Logo";

function Login({ onLogin }) {
  const {values, errors, isFormValid, handleChange} = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(values);
  };

  return (
    <div className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__label'>E-mail</label>
        <input
          onChange={handleChange}
          value={values.email || ""}
          className={`login__input ${errors.email && "login__input_invalid"}`}
          id='email'
          minLength='2'
          maxLength='30'
          required
          type='email'
          name='email'
          placeholder='E-mail'
        />
        <span className='login__input-error'>{errors.email}</span>
        <label className='login__label'>Пароль</label>
        <input
          onChange={handleChange}
          value={values.password}
          className={`login__input ${
            errors.password && "login__input_invalid"
          }`}
          id='password'
          minLength='8'
          maxLength='30'
          required
          type='password'
          name='password'
          placeholder='Пароль'
        />
        <span className='login__input-error'>{errors.password}</span>
        <button
          className={`login__submit-btn ${
            isFormValid ? "" : "login__submit-btn_disabled"
          }`}
          disabled={!isFormValid}
          type='submit'
        >
          Войти
        </button>
      </form>
      <div className='login__signin'>
        <p>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__register-link'>
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
