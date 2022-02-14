import React from 'react';
import './Forms.css';

function Forms2() {
    return (
      <main className="passagens">
      <form>
      <h6>Bem-vindo à sua próxima viagem!</h6>
          <p>Encontre os melhores voos</p>       
          <input type="text" placeholder='Origem'/>    
          <input type="text" placeholder='Destino'/>  
          <input type="text" placeholder='Trecho'/>  
          <input type="date" placeholder='Data de Ida'/>    
          <input type="date" placeholder='Data de Volta'/>     
          <input type="text" placeholder='Passageiros'/>
          <button>COMPRAR!</button>
      </form>
  </main>
    );
}

export default Forms2;