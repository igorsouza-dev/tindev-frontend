import React from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
export default () => {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev"/>
                <input type="text" placeholder="Digite seu usuário no github"></input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}