import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    await api.post('sessions', { id })
      .then(function({ data }){
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', data.name);

        history.push('/profile');
      }).catch(function(error){
        alert('Falha no login!');
      })
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Sua ID"/>

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}