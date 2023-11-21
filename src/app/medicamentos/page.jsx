import React from 'react'
import './medicamentos.scss'
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'

export default function Medicamentos() {
  return (
   <>
   <div className='titulo'> 
    
   <h1 className='titulo-principal'> Medicamentos</h1>

   
   </div>

   <div>
   <div className='conteudo' >
      
          <div className='texto-conteudo'>
           
          <p>Em nosso espaço dedicado a medicamentos, proporcionamos a você um guia abrangente e confiável. Nosso objetivo é ser a fonte central onde você pode encontrar informações detalhadas sobre uma variedade de medicamentos, desde os mais comuns até opções especializadas.
          Apresentamos dados completos sobre composição, posologia, efeitos colaterais e interações medicamentosas. Utilize nossa barra de busca intuitiva para encontrar rapidamente o que precisa, seja pelo nome do medicamento ou pelo princípio ativo.Valorizamos a transparência e, por isso, incentivamos a comunidade a compartilhar experiências reais. Leia avaliações de outros usuários, enriquecendo seu conhecimento e proporcionando uma visão prática sobre diferentes medicamentos.Nossa equipe é composta por especialistas comprometidos em fornecer informações precisas e atualizadas. Estamos aqui para ser sua fonte confiável de conhecimento sobre medicamentos, capacitando você a tomar decisões informadas sobre sua saúde.
          Explore nossa página, descubra o que precisa e confie em nós para ser seu guia na jornada para o bem-estar. Bem-vindo à sua fonte confiável de informações de saúde.
          </p>
          </div>

    </div>
   </div>

   <div className='titulo-medicamentos'>

   <h2 className='subtitulo'>Remedios que voce procura</h2>

   </div>

   <div className='cards'>
    
      <div className='card-caixa'>
        <div >
        <Image src= "/image/paracetamol.jpg" 
            width={250}
            height={220}
            alt ="Imagem da caixa de Paracetamol"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/" className='link'> 
                  <h4 className='cards-titulo' > Paracetamol</h4>
                  
                  <p className='saiba-mais'>saiba mais...</p>
              </Link>
              </div>
        </div>
      </div>
      <div className='card-caixa'>
      <div className='card-image'>
      <Image src= "/image/dipirona.jpg" 
            width={250}
            height={220}
            alt ="Imagem da caixa de Dipirona"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/" className='link'> 
                  <h4 className='cards-titulo' >Dipirona</h4>
                  <p className='saiba-mais'>saiba mais...</p>
              </Link>
            </div>
        </div>
          
      </div>
      <div className='card-caixa'>
      <div className='card-image'>
      <Image src= "/image/losartana.jpg" 
            width={250}
            height={220}
            alt ="Imagem da caixa de Lorsartana"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/" className='link'> 
                  <h4 className='cards-titulo' >Lorsartana</h4>
                  <p className='saiba-mais'>saiba mais...</p>
              </Link>
            </div>
        </div>
          
      </div>
     
    </div>

    <ListaMedicamentos/>

    
   </>
  )
}
