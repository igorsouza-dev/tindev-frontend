import React, { useState } from 'react';
import logo from '../assets/logo.svg';

import './Login.css';
import api from '../services/api';

export default (props) => {
    const [username, setUsername] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/devs', {
            username
        });
        const { id } = response.data;
        props.history.push(`/dev/${id}`);

    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    type="text" 
                    placeholder="Digite seu usuário no github" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    ></input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}