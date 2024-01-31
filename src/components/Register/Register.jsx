import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Logo from "../Logo/Logo";
import "./Register.css";


function Register({ onRegister }) {
  const { values, errors, isFormValid, handleChange } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(values);
  };

  return (
    <div className='register'>
      <Logo />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__label'>Имя</label>
        <input
          onChange={handleChange}
          value={values.name || ""}
          className={`register__input ${
            errors.name && "register__input_invalid"
          }`}
          id='name'
          minLength='2'
          maxLength='30'
          required
          type='text'
          name='name'
          placeholder='Имя'
        />
        <span className='register__input-error'>{errors.name}</span>
        <label className='register__label'>E-mail</label>
        <input
          onChange={handleChange}
          value={values.email || ""}
          className={`register__input ${
            errors.email && "register__input_invalid"
          }`}
          id='email'
          minLength='2'
          maxLength='30'
          required
          type='email'
          name='email'
          placeholder='E-mail'
        />
        <span className='register__input-error'>{errors.email}</span>
        <label className='register__label'>Пароль</label>
        <input
          onChange={handleChange}
          value={values.password || ""}
          className={`register__input ${
            errors.password && "register__input_invalid"
          }`}
          id='password'
          minLength='8'
          maxLength='30'
          required
          type='password'
          name='password'
          placeholder='Пароль'
        />
        <span className='register__input-error'>{errors.password}</span>
        <button
          className={`register__submit-btn ${
            isFormValid ? "" : "register__submit-btn_disabled"
          }`}
          disabled={!isFormValid}
          type='submit'
        >
          Зарегистрироваться
        </button>
      </form>
      <div className='register__signin'>
        <p>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__login-link'>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
