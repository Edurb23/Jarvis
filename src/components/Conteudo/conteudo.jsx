import React from 'react'
import './conteudo.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function conteudo() {
  return (
    <>
    
    <div className='titulo'>
        <h4 className='titulo-home'>
          Voce pode se interessar
        </h4>
    </div>
    <div className='cards'>
      <div className='card-caixa'>
        <div >
        <Image src= "/image/banner-exame.png" 
            width={250}
            height={220}
            alt ="Imagem da logo da porto seguro"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/exames" className='link'> 
                  <h4 className='cards-titulo' > Orientação de Exames</h4>
                  <p className='card-texto'>Saiba oque fazer antes e depois dos seus exames e cirugias</p>
                  <p>leia mais...</p>
              </Link>
              </div>
        </div>
      </div>
      <div className='card-caixa'>
      <div className='card-image'>
      <Image src= "/image/banner-medicamento.png" 
            width={250}
            height={220}
            alt ="Imagem da logo da porto seguro"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/medicamentos" className='link'> 
                  <h4 className='cards-titulo' >  Seus medicamentos</h4>
                  <p className='card-texto'>Voce sabe o que voce pode fazer tomando o seu medicamento?</p>
                  <p>leia mais...</p>
              </Link>
            </div>
        </div>
          
      </div>
     
    </div>

    
    </>
  )
}
