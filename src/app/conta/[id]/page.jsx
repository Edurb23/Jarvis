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


  const handleClick = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:8080/api/paciente/${params.id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            
            body: JSON.stringify(cliente)
        });
        


        if(response.status == 204){
            setMsgStatus("Excluído com Sucesso!");
            setTimeout(()=>{
                setMsgStatus("");
                router.push("/");
            },5000);

        }else{
            setMsgStatus("Ocorreu um erro!");
            setTimeout(()=>{
                setMsgStatus("");
            },5000);
        }
    }catch (error) {
    }
} 



   

  


  
  
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
              <input type="text" name='nome' id='idNome' value={paciente.nm_paciente}/>
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
              <select id="sexoBiologico" name="sexoBiologicoID"  >
                <option value="masculino">{paciente.fl_sexo_biologico}</option>
                
              </select>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <input type="number" id="altura" name="alturaId" value={paciente.nr_altura} />
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <input type="number" id="peso" name="peso" value={paciente.nr_peso} />
            </div>
            <div className='email'>
              <label for="emailID">Email:</label>
              <input type="email" name='email' id='idEmail' value={email.ds_email}  />
            </div>
            <button className='botaoEditar'><Link className='link-editar'  href="/conta/editar" >Editar</Link></button>
            <button className='botaoExcluir' onClick={handleClick}><Link className='link-excluir'  href="/" >Excluir Conta</Link></button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}
