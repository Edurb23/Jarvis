"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import './login.scss'

export default function Login() {

  const navigate = useRouter("");

  const [msgstatus, setMsgStatus] = useState("");
  

  const [usuario, setUsuario] = useState({
    "info":"login",
    "email":"",
    "senha":""
  });

  const handleChange = (e)=>{
    const{name,value} = e.target;
    setUsuario({...usuario,[name]:value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:8080/api/cadastro/getuser',{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:  JSON.stringify(usuario)
      });
      if(response.ok){
        const user = await response.json();

        if(user){
          
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

          
          sessionStorage.setItem("token-user",token);

          
          process.env.NEXT_PUBLIC_TOKEN_USER = token;


          setMsgStatus("Login realizado com sucesso!");
          setTimeout(()=>{
            setMsgStatus("");
    
            navigate.push("/conta");
          },5000);


        }else{
          setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
          setTimeout(()=>{
              setMsgStatus("");
              setUsuario({
                  "info":"login",
                  "email":"",
                  "senha":""
              });
          },5000);
        }
      }
    }catch (error) 
    {
    }  
  }
            

  return (
    <div className='fundo-login'>
      <div className='caixa-login' >
        <div>

        <div className='titulo-login'>
          <h1>Login</h1>
          <p className='subtitulo-login'>Não tem sua conta? <Link className='link-cadastro' href="/cadastro" >Crie sua conta agora!</Link></p>

        </div>
        <form onSubmit={handleSubmit}>
          <div className='email'>
            <label for ="idEmail">Endereço de email</label>
            <input type="email" name='email' id='idEmail' value={usuario.email} onChange={handleChange}/>
          </div>
          <div className='senha'>
          <label for ="idSenha">Senha</label>
          <input type="password" name='senha' id='idSenha' value={usuario.senha} onChange={handleChange} />
          </div>
          <button className='botaoLogin'>ENTRAR</button>
        </form>
        </div>
      </div>
    </div>
  )
}
