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
          Omeprazol é um medicamento classificado como inibidor da bomba de prótons, utilizado no tratamento de condições gastrointestinais. Ele atua diminuindo a produção de ácido no estômago, sendo eficaz no tratamento de úlceras, refluxo gastroesofágico e condições relacionadas ao excesso de ácido gástrico. A dosagem é prescrita pelo médico e geralmente é tomada antes das refeições. Este medicamento pode interagir com outros fármacos, e em alguns casos, pode apresentar efeitos colaterais, como dores de cabeça, náuseas ou diarreia. Portanto, seu uso deve ser acompanhado por um profissional de saúde para garantir a segurança e eficácia do tratamento.
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
          <summary>Quanto custa o Omeprazol?</summary>
          <p>O valor do medicamento pode variar entre R$15 até R$20 de acordo com a farmácia e a quantidade de comprimidos adquiridos.</p>
        </details>
        <details>
          <summary>Omeprazol serve para dor de estômago?</summary>
          <p>Sim, serve para a dores de estômago por reduzir o ácido estomacal.</p>
        </details>
        <details>
          <summary>Como tomar Omeprazol?</summary>
         <p>A indicação é que seja consumido um Omeprazol ao dia pelo tempo máximo de 4 semanas. Existem casos específicos que esse período pode ser estendido por mais 4 semanas.</p>
        </details>
      </section>

      <ListaMedicamentos/>

    </>
  )
}
