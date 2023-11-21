import React from 'react'

export default function Login() {
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
