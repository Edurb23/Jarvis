import React from 'react'
import Link from 'next/link'

export default function EditarConta() {
  return (
    <>
     <div className='fundo-conta'>
      <div className='caixa-conta' >
        <div>

          <div className='titulo-conta'>
            <h1>EDITAR CONTA</h1>
           

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
            <button className='botaoEditar'><Link className='link-editar'  href="/" >Editar</Link></button>
            <button className='botaoExcluir'><Link className='link-excluir'  href="/" >Excluir Conta</Link></button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
