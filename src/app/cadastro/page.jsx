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

  useEffect(() => {
    if (msgstatus)
      alert(msgstatus)
  }, [msgstatus])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value })
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
              <input type="text" name='nome' id='idNome' required value={paciente.nm_paciente} onChange={handleChange} />
            </div>
            <div className='cpf'>
              <label for="idCpf">CPF</label>
              <input type="text" id="cpf" name="idCpf" required  value={paciente.nr_cpf} onChange={handleChange}/>
            </div>
            <div className='rg'>
              <label for="idRg">RG</label>
              <input type="text" id="rg" name="idRg" required  value={paciente.nr_rg} onChange={handleChange} />
            </div>
            <div className='sexoBiologico'>
              <label for="sexoBiologicoID">Sexo Biológico:</label>
              <select id="sexoBiologico" name="sexoBiologicoID" required value={paciente.fl_sexo_biologico} onChange={handleChange}>
                <option value="masculino">M</option>
                <option value="feminino">F</option>
                <option value="outro">I</option>
              </select>
            </div>
            <div className='altura'>
              <label for="alturaID">Altura (cm):</label>
              <input type="number" id="altura" name="alturaId" required  value={paciente.nr_altura} onChange={handleChange}/>
            </div>
            <div className='peso'>
              <label for="pesoID">Peso (kg):</label>
              <input type="number" id="peso" name="peso" required value={paciente.nr_rg} onChange={handleChange} />
            </div>


            {/* <div className='email'>
              <label for="idEmail">Endereço de email</label>
              <input type="email" name='email' id='idEmail' required />
            </div>
            <div className='senha'>
              <label for="idSenha">Senha</label>
              <input type="password" name='senha' id='idSenha' required />
            </div> */}
            <button className='botaoLogin'>CADASTRAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}
