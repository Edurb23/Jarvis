import React from 'react'
import './omeprazol.scss'
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'


export default function Omeprazol() {
  return (
    <>
      <div className='titulo'>

        <h1 className='titulo-principal'> Omeprazol</h1>

        


      </div>

      <div className='conteudo-omeprazol' >
        <div className='titulo-omeprazol'>
          <h4>Sobre a atenolol</h4>
        </div>
        <div className='texto-conteudo-omeprazol'>
          <p>
            É um beta-bloqueador usado principalmente no tratamento da hipertensão -arterial e em certos distúrbios cardíacos. Ele atua reduzindo a frequência cardíaca e a pressão arterial, ajudando a controlar a hipertensão e a diminuir a carga de trabalho do coração.
          </p>

        </div>

      </div>
        
      <div className='imagem-remedio'>
        <Image  src="/image/atenolol.png"
              width={450}
              height={420}
              alt="Imagem da caixa de Paracetamol"
              className='image'
              
            />
           
      </div>

      <dir className= "link-compra">
      <Link className='a' href="https://www.drogariasaopaulo.com.br/omeprazol-20mg-generico-cimed-56-capsulas/p" target='_blank' > Compre Agora</Link>
      </dir>

      

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>Porque o atenolol diminui a frequência cardíaca?</summary>
          <p>O Atenololol pertence a uma classe de medicamentos chamada β-bloqueadores. Funciona relaxando os vasos sanguíneos e diminuindo a frequência cardíaca para melhorar o fluxo sanguíneo e baixar a pressão arterial.</p>
        </details>
        <details>
          <summary>Qual efeito esperado ao tratar um paciente com atenolol?</summary>
          <p>Qual efeito esperado ao tratar um paciente com atenolol?
            O atenolol pode agravar os distúrbios da circulação arterial periférica, reduzindo a circulação, principalmente nos pacientes que sofrem de síndrome de Raynaud e outras doenças vasculares periféricas.</p>
        </details>
        <details>
          <summary>Quem toma atenolol urina muito?</summary>
          <p>A clortalidona aumenta a quantidade de urina produzida pelos rins. O efeito deste medicamento é mantido por no mínimo 24 horas após dose oral única diária</p>
        </details>
      </section>

      <ListaMedicamentos/>

    </>
  )
}
