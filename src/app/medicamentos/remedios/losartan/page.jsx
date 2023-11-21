import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'
import './losartana.scss'

export default function Lorsartan() {
  return (
    <>
      <div className='titulo'>

        <h1 className='titulo-principal'> Losartan</h1>

        


      </div>

      <div className='conteudo-losartan' >
        <div className='titulo-losartan'>
          <h4>Sobre a Losartan</h4>
        </div>
        <div className='texto-conteudo-losartan'>
         <p>
         Pertence à classe de medicamentos chamados de bloqueadores dos receptores de angiotensina II (BRA). É utilizado para tratar a hipertensão arterial, bem como a insuficiência cardíaca em alguns casos. Age relaxando os vasos sanguíneos, o que resulta na redução da pressão arterial.
          Ambos os medicamentos devem ser prescritos por um médico e a dosagem é determinada de acordo com as necessidades individuais do paciente. Eles podem apresentar efeitos colaterais como tonturas, fadiga, dores de cabeça ou problemas gastrointestinais. É importante seguir as instruções médicas rigorosamente e informar ao profissional de saúde sobre qualquer outra medicação que esteja sendo tomada para evitar interações adversas.

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
      <Link className='a' href="https://www.drogariasaopaulo.com.br/losartana-50mg-generico-eurofarma-30-comprimidos-revestidos/p" target='_blank' > Compre Agora</Link>
      </dir>

      

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>O que você precisa saber sobre losartana?</summary>
          <p>A losartana é um medicamento que promove a dilatação dos vasos sanguíneos, permitindo uma melhor circulação do sangue. Por esse motivo, ela costuma ser indicada para diminuir a pressão nas artérias e melhorar o funcionamento do coração de quem sofre com hipertensão ou insuficiência cardíaca.</p>
        </details>
        <details>
          <summary>Qual é o princípio ativo do losartana?</summary>
          <p>A losartana potássica + hidroclorotiazida é uma associação em dose fixa (uma combinação de dois ou mais princípios ativos em uma mesma forma farmacêutica) com os nomes comerciais acima expostos. É uma combinação de um antagonista dos receptores de angiotensina II (losartana) e um diurético (hidroclorotiazida).</p>
        </details>
        <details>
          <summary>Quais são os benefícios da losartana?</summary>
          <p>Losartana é indicada para pacientes com hipertensão, também conhecida como pressão alta, ou que enfrentam algum caso de insuficiência cardíaca. O medicamento atua reduzindo os riscos de acidente vascular cerebral (AVC) e de ataques cardíacos, oferecendo mais tranquilidade e qualidade de vida para os pacientes.</p>
        </details>
      </section>

      <ListaMedicamentos/>

    </>
  )
}
