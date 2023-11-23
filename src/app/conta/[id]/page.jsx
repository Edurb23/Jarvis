"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './conta.scss'
import { useRouter } from 'next/navigation';

export default function Conta({params}) {
  
   const router = useRouter();

   const [paciente, setPaciente] = useState({
    "nm_paciente":"",
    "nr_cpf":"",
    "nr_rg":"",
    "fl_sexo_biologico": "",
    "nr_altura": "",
    "nr_peso": "",
    "dt_data_nascimento":"",
    "id_paciente": params.id
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
       console.log(paciente)
       setPaciente(paciente);
      }catch(erro){
       console.log(erro);
      // redirect("/error")
      }
    };
    getPacientes();
   }, [params.id])

   const [email, setEmail] = useState({
    "ds_email": "",
    "st_email": "",
    "id_paciente": params.id,
    "id_email": params.id
  
  })
  
  useEffect(() => {
    const obeterEmail = async() => {
      try{
        const responseget = await fetch(`http://localhost:8080/api/emailpaciente/${params.id}`,{
          method: "GET",
          headers:{
            "Content-Type":"application/json" 
          }
        });
        let emailAtual = await responseget.json();
        setEmail(emailAtual)
      }catch(error){
        console.log(error)
      }
    }
    obeterEmail()
  }, [email.id])
   

  


  
  
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
              <div>
                <span>{paciente.nm_paciente}</span>
              </div>
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <div>
                <span>{paciente.nr_cpf}</span>
              </div>
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <div>
                <span>{paciente.nr_rg}</span>
              </div>
            </div>
            <div className='sexoBiologico'>
              <label for="sexoBiologicoID">Sexo Biológico:</label>
              <div>
                <span>{paciente.fl_sexo_biologico}</span>
              </div>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <div>
                <span>{paciente.nr_altura}</span>
              </div>
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <div>
                <span>{paciente.nr_peso}</span>
              </div>
            </div>
            <div className='email'>
              <label for="emailID">Email:</label>
              <div>
                <span>{email.ds_email}</span>
              </div>
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
