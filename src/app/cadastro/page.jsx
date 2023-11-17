import React from 'react'
import Link from 'next/link'
import './cadastro.scss'

export default function Cadastro() {
  return (
    <div className='fundo-cadastro'>
      <div className='caixa-cadastro' >
        <div>

          <div className='titulo-cadastro'>
            <h1>Cadastro</h1>
            <p className='subtitulo-cadastro'>Já tem sua conta?<Link className='link-cadastro' href="/login" >Entra</Link></p>

          </div>
          <form>
            <div className='nome'>
              <label for="idNome">Nome</label>
              <input type="text" name='nome' id='idNome' required />
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <input type="text" id="cpf" name="idCpf" required />
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <input type="text" id="rg" name="idRg" required />
            </div>
            <div className='sexoBiologico'>
              <label for="sexoBiologicoID">Sexo Biológico:</label>
              <select id="sexoBiologico" name="sexoBiologicoID" required>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <input type="number" id="altura" name="alturaId" required />
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <input type="number" id="peso" name="peso" required />
            </div>


            <div className='email'>
              <label for="idEmail">Endereço de email</label>
              <input type="email" name='email' id='idEmail' required />
            </div>
            <div className='senha'>
              <label for="idSenha">Senha</label>
              <input type="password" name='senha' id='idSenha' required />
            </div>
            <button className='botaoLogin'>CADASTRAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}
