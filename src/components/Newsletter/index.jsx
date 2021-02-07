import React, {useState} from 'react';

import api from '../../services/api';
import * as Yup from 'yup';

import './style.css';


const Newsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();

      try {
        const data = {
          name,
          email,
        };

        const schema = Yup.object().shape({
          name: Yup.string().required('Preencha com seu nome completo'),
          email: Yup.string()
            .email('Preencha com um e-mail válido')
            .required('Preencha com um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('newsletter', data).then(response => {
          console.log(response)
        });

        setName('');
        setEmail('');
        setErrorName('');
        setErrorEmail('');

        // eslint-disable-next-line no-alert
        alert('Cadastro realizado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = {};

          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });

          setErrorName(validationErrors.name);
          setErrorEmail(validationErrors.email);

          console.log(errorEmail)
        }
      }
    }
    return(
      <div className="newsletter">
        <div className="newsletter__content container">
          <h2 className="news-title">
            Participe de nossas news com promoções e novidades!
          </h2>
          <form onSubmit={handleSubmit} className="news-form">
            <div className="news-form__box-name">
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  setErrorName('');
                }}
              />
              {errorName && (<p className="error-name">{errorName}</p>)}
            </div>
            <div className="news-form__box-mail">
              <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    setErrorEmail('');
                  }}
                />
                {errorEmail && (<p className="error-email">{errorEmail}</p>)}
            </div>
            <input type="submit" className="submit" value="Eu quero!" />
          </form>
        </div>

        <div className="newsletter-success container">
              <p className="form-success">Seu e-mail foi cadastrado com successo!</p>
              <p className="form-success-tiny">
                  A partir de agora você receberá as novidades e ofertas exclusivas
              </p>
              <button className="submit-again">Cadastrar novo e-mail</button>
        </div>

      </div>
    )
}

export default Newsletter