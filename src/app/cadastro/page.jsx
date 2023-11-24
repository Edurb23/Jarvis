"use client";
import React from 'react'
import Link from 'next/link'
import './cadastro.scss'
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";

export default function Cadastro() {

  const router = useRouter();

  const [msgstatus, setMsgStatus] = useState("");

  const [paciente, setPaciente] = useState({
    "nm_paciente": "",
    "nr_cpf": "",
    "nr_rg": "",
    "fl_sexo_biologico": "",
    "nr_altura": "",
    "nr_peso": "",
    "dt_data_nascimento": "",
  })

  const [email, setEmail] = useState({
    "ds_email": "",
    "st_email": "",
    "id_paciente": params.id,
    "id_email": ""
  })

  const [senha, setSenha] = useState({
    "id_cadastro": "",
    "id_paciente": params.id,
    "id_email": "",
    "cd_senha": ""
  })

  useEffect(() => {
    if (msgstatus)
      alert(msgstatus)
  }, [msgstatus])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value })
  }


  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...email, [name]: value })
  }


  const handleChangeSenha = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...senha, [name]: value })
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await fetch("http://localhost:8080/api/paciente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(paciente)
      });

      if (response.ok) {
        const paciente = await response.json();

        if (paciente) {
          setMsgStatus("Cadastro Realizado com Sucesso!");
          setTimeout(() => {
            setMsgStatus("");
            router.push(`/conta/${params.id}`);
          }, 5000);
        } else {
          console.error("Erro ao analisar resposta JSON:", error);
          setMsgStatus("Ocorreu um erro!");
          setTimeout(() => {
            setMsgStatus("");
            setPaciente({
              "nm_paciente": "",
              "nr_cpf": "",
              "nr_rg": "",
              "fl_sexo_biologico": "",
              "nr_altura": "",
              "nr_peso": "",
              "dt_data_nascimento": "",
            });
          }, 5000);
        }
      }
    } catch (error) {
      console.error("Erro ao analisar resposta JSON:", error);
    }
  }



  return (
    <div className='fundo-cadastro'>
      <div className='caixa-cadastro' >
        <div>

          <div className='titulo-cadastro'>
            <h1>Cadastro</h1>
            <p className='subtitulo-cadastro'>Já tem sua conta?<Link className='link-cadastro' href="/login" >Entra</Link></p>

          </div>
          <form onSubmit={handleSubmit}>
            <div className='nome'>
              <label for="idNome">Nome</label>
              <input type="text" name='nm_paciente' id='idNome' required value={paciente.nm_paciente} onChange={handleChange} />
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <input type="text" id="cpf" name="nr_cpf" required  value={paciente.nr_cpf} onChange={handleChange}/>
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <input type="text" id="rg" name="nr_rg" required  value={paciente.nr_rg} onChange={handleChange} />
            </div>
            <div className='sexoBiologico'>
              <label for="sexoBiologicoID">Sexo Biológico:</label>
              <select id="sexoBiologico" name="fl_sexo_biologico" required value={paciente.fl_sexo_biologico} onChange={handleChange}>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="I">I</option>
              </select>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <input type="number" id="altura" name="nr_altura" required  value={paciente.nr_altura} onChange={handleChange}/>
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <input type="number" id="peso" name="nr_peso" required value={paciente.nr_peso} onChange={handleChange} />
            </div>
            <div className='email'>
              <label for="idEmail">Endereço de email</label>
              <input type="email" name='ds_email' id='idEmail' required value={email.ds_email} onChange={handleChangeEmail} />
            </div>
            <div className='senha'>
              <label for="idSenha">Senha</label>
              <input type="password" name='cd_senha' id='idSenha' required value={senha.cd_senha} onChange={handleChangeSenha} />
            </div>
            <button className='botaoLogin'>CADASTRAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}
