import React from 'react'
import "./rodape.scss"

export default function rodape() {
  return (
    <>
      <footer className='rodape'>
        <div className='rodape-top'>

          <h1 > 1TDSPV  </h1>
          <p> desenvolvido pela equipe J.A.R.V.I.S</p>

        </div>
        <div className='rodape-body'>
          <h1>INTEGRANTES</h1>
          <ul>
            <li>
              <p>
                Eduardo Reis Braga rm551987 desenvolvedor java e web
                </p>
            </li>
            <li>
              <p>
                Raphael Pabst  rm98525 scrum master e desenvolvedor backend
              </p>
            </li>
            <li>
              <p>
               Silvio Junior rm550821 Analista de Banco de Dados
              </p>
            </li>
            <li>
              <p>
              Leonardo Ribeiro Barral rm551472 desenvolvedor fullstack
              </p>
              </li>
            <li><p>
             Pedro Braga  rm551061 desenvolvedor de IA e chatbot
              </p></li>
          </ul>
        </div>
        <div className='rodape-bottom'>
          <p> Copyright © 2023 J.A.R.V.I.S enterprises. Todos os direitos reservados.</p>
        </div>

      </footer>

    </>
  )
}
