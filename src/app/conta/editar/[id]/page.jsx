"use client";


import React from 'react'
import Link from 'next/link'
import './editarConta.scss'
import { useRouter } from 'next/router';

export default function EditarConta({params}) {
  
  const id = String(params.id)

  const router = useRouter();

  const [msgstatus, setMsgStatus] = useState("");

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

   useEffect(()=>{
    if (msgstatus)
        alert(msgstatus)
}, [msgstatus])

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

  
  
  
  return (
    <>
     <div className='fundo-editar'>
      <div className='caixa-editar' >
        <div>

          <div className='titulo-editar'>
            <h1>EDITAR CONTA</h1>
           

          </div>
          <form>
            <div className='nome'>
              <label for="idNome">Nome</label>
              <input type="text" name='nome' id='idNome'  />
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <input type="text" id="cpf" name="idCpf"  />
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <input type="text" id="rg" name="idRg" />
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
              <input type="number" id="peso" name="peso" />
            </div>


            <div className='email'>
              <label for="idEmail">Endereço de email</label>
              <input type="email" name='email' id='idEmail'  />
            </div>
            <div className='senha'>
              <label for="idSenha">Senha</label>
              <input type="password" name='senha' id='idSenha' />
            </div>
            <button className='botaoEditar'><Link className='link-editar'  href="/" >Editar</Link></button>
            <button className='botaoEditar'><Link className='link-editar'  href="/conta" >Voltar</Link></button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
