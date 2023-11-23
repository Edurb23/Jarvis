"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './conta.scss'

export default function Conta(params) {
  
   const router = setRouter();

   const [paciente, setPaciente] = useState({
    "nm_cliente":"",
    "nr_cpf":"",
    "nr_rg":"",
    "fl_sexo_biologico": "",
    "nr_altura": "",
    "nr_peso": "",
    "dt_data_nascimento":"",
    "id_cliente": params.id
   })


   useEffect( () => {
    const getPacientes = async () => {
      try{
       const responseget = await fetch(`http://localhost:8080/api/paciente/${params.id}`,{
         method: "GET",
         headers:{
           "Content-Type": "application/json"
         }
       });
       let paciente = await responseget.json();
       setPaciente(paciente);
      }catch(erro){
       console.log(erro);
       redirect("/error")
      }
    };
    getPacientes();
   }, [params.id])
   

  


  
  
  return (
   <>
    <div className='fundo-conta'>
      <div className='caixa-conta' >
        <div>

          <div className='titulo-conta'>
            <h1>MINHA CONTA</h1>
           

          </div>
          <form>
            <div className='nome'>
              <label for="idNome">Nome</label>
              <input type="text" name='nome' id='idNome' />
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <input type="text" id="cpf" name="idCpf"  />
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <input type="text" id="rg" name="idRg"  />
            </div>
            <div className='sexoBiologico'>
              <label for="sexoBiologicoID">Sexo Biológico:</label>
              <select id="sexoBiologico" name="sexoBiologicoID" >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <input type="number" id="altura" name="alturaId" />
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <input type="number" id="peso" name="peso"  />
            </div>


            <div className='email'>
              <label for="idEmail">Endereço de email</label>
              <input type="email" name='email' id='idEmail'  />
            </div>
            <div className='senha'>
              <label for="idSenha">Senha</label>
              <input type="password" name='senha' id='idSenha'  />
            </div>
            <button className='botaoEditar'><Link className='link-editar'  href="/conta/editar" >Editar</Link></button>
            <button className='botaoExcluir'><Link className='link-excluir'  href="/" >Excluir Conta</Link></button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}
