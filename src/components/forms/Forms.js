import React from 'react';
import './Forms.css';

function Forms() {
    return (
      <main className="cadastro">
      <form>
      <h6>Não tem cadastro?</h6>
          <p>É rápido e simples, basta informar alguns dados</p>       
          <input type="text" placeholder='Digite seu nome'/>      
          <input type="email" placeholder='Digite seu email'/>         
          <input type="text" placeholder='Digite sua senha'/>
          <button>CADASTRAR!</button>
      </form>
  </main>
    );
}

export default Forms;