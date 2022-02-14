import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Junte-se à newsletter para receber nossas melhores ofertas de férias
        </p>
        <p className='footer-subscription-text'>
        Você pode cancelar sua inscrição a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu Email'
            />
            <Button buttonStyle='btn--outline'>Se inscrever</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Depoimentos</Link>
            <Link to='/'>Carreiras</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos de Serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Fale conosco</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Destinos</Link>
            <Link to='/'>Patrocínios</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Vídeos</h2>
            <Link to='/'>Enviar vídeo</Link>
            <Link to='/'>Ebaixadores</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influenciadores</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              VIAJE BEM
            </Link>
          </div>
          <small class='website-rights'>VIAJE BEM © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;