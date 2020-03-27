import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; // fi = feather icons

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            {/* esse Link faz com q o React n precise recarregar tudo na página, se comportando com um SPA */}
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
          {/* material icons, font awesome, feather icons (pacotes de ícones) */}

        </form>

      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}