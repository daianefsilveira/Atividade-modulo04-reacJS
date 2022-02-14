import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
    <h1>Confira nossos melhores destinos!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem 
          src='images/img-9.jpg'
          text='Explore a cachoeira escondida nas profundezas da Floresta Amazônica'
          label='Aventura'
          path='/destinos'
          />
          <CardItem
              src='images/img-2.jpg'
              text='Viaje pelas Ilhas de Bali em um Cruzeiro Privado'
              label='Luxo'
              path='/destinos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Navegue no Oceano Atlântico visitando Águas Inexploradas'
              label='Mistério'
              path='/destinos'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experimente o futebol no topo das Montanhas do Himalaia'
              label='Aventura'
              path='/passagens'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Passeie pelo Deserto do Saara em um passeio guiado de camelo'
              label='Adrenalina'
              path='/cadastro'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
