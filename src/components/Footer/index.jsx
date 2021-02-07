import React from 'react';

import './style.css';

import coreFooter from '../../assets/img/core-footer.png';
import Vtex from '../../assets/img/vtex.png';


const Footer = () => {
  return(
    <div className="footer">
      <div className="footer__content container">
      <div className="footer__content__column">
        <div className="address">
          <h2 className="address__title">Localização</h2>
          <p className="address__location">
            Avenida Andrômeda, 2000. Bloco 6 e 8
          </p>
          <p className="address__location">Alphavile SP</p>
        </div>
        <div className="contact">
          <a href="mailto:brasil@corebiz.ag" className="contact__mail"
            >brasil@corebiz.ag</a
          >
          <p className="contact__phone">+55 11 3090 1039</p>
        </div>
      </div>
      <div className="footer__content__column">
        <div className="buttons">
          <a href="#" className="btn-contact"> ENTRE EM CONTATO </a>
          <a href="#" className="btn-talk"> FALE COM O NOSSO CONSULTOR ONLINE </a>
        </div>
      </div>
      <div className="footer__content__column">
        <a href="https://www.corebiz.ag/" target="blank" className="logo-corebiz">
          <img src={coreFooter} alt="corebiz" />
        </a>
        <a href="https://vtex.com/br-pt/" target="blank" className="logo-vtex">
          <img src={Vtex} alt="vtex" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Footer;