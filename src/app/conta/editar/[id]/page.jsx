"use client";
import Link from 'next/link'
import './editarConta.scss'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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
  const obeterPaciente = async() => {
    try{
      const responseget = await fetch(`http://localhost:8080/api/paciente/${params.id}`,{
        method: "GET",
        headers:{
          "Content-Type":"application/json" 
        }
      });
      let pacienteAtual = await responseget.json();
      setPaciente(pacienteAtual)
    }catch(error){
      console.log(error);

    }
  }
  obeterPaciente()
}, [paciente.id]
)


 const handleChange = (e)=>{
  const {name, value} = e.target;
  setPaciente({...paciente,[name]:value})
}

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
     <div className='fundo-editar'>
      <div className='caixa-editar' >
        <div>

          <div className='titulo-editar'>
            <h1>EDITAR CONTA</h1>
           

          </div>
          <form>
            <div className='nome'>
              <label for="idNome">Nome</label>
              <input type="text" name='nome' id='idNome' value={paciente.nm_paciente}  onChange={handleChange}/>
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <input type="text" id="cpf" name="idCpf" value={paciente.nr_cpf}  />
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <input type="text" id="rg" name="idRg" value={paciente.nr_rg}  />
            </div>
            <div className='sexoBiologico'>
              <label for="sexoBiologicoID">Sexo Biológico:</label>
              <select id="sexoBiologico" name="sexoBiologicoID" value={paciente.fl_sexo_biologico}>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <input type="number" id="altura" name="alturaId" value={paciente.nr_altura} />
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <input type="number" id="peso" name="peso" value={paciente.nr_peso}/>
            </div>


            <div className='email'>
              <label for="idEmail">Endereço de email</label>
              <input type="email" name='email' id='idEmail' value={email.ds_email}  />
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
