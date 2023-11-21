import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'
import './dipirona.scss'

export default function Dipirona() {
  return (
    <>
      <div className='titulo'>

        <h1 className='titulo-principal'> Dipirona</h1>

        


      </div>

      <div className='conteudo-dipirona' >
        <div className='titulo-dipirona'>
          <h4>Sobre a Dipirona</h4>
        </div>
        <div className='texto-conteudo-dipirona'>
          <p>
           A dipirona é um medicamento analgésico e antipirético utilizado para aliviar dores leves a moderadas e reduzir a febre. Ela atua no sistema nervoso central para diminuir a percepção da dor e no centro regulador da temperatura para baixar a febre. A dosagem deve seguir a prescrição médica ou as instruções da embalagem, evitando doses excessivas que possam causar reações adversas, como queda da pressão arterial ou reações alérgicas. É importante utilizar a dipirona com cautela e sob orientação médica, especialmente em casos de alergia a outros medicamentos ou condições específicas de saúde.
          </p>

        </div>

      </div>
        
      <div className='imagem-remedio'>
        <Image  src="/image/dipirona.jpg"
              width={450}
              height={420}
              alt="Imagem da caixa de Paracetamol"
              className='image'
              
            />
           
      </div>

      <dir className= "link-compra">
      <Link className='a' href="https://www.drogariasaopaulo.com.br/dipirona-1g-generico-farmaco-10-comprimidos/p" target='_blank' > Compre Agora</Link>
      </dir>
      

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>Quanto tempo dura o efeito de dipirona?</summary>
          <p>A dipirona começa a fazer efeito em aproximadamente 30 minutos após sua administração oral, atingindo sua maior concentração plasmática após 2h</p>
        </details>
        <details>
          <summary>A partir de que idade pode tomar dipirona em comprimido?</summary>
          <p>A dipirona é recomendada para adolescentes a partir de 15 anos. No entanto, crianças com mais de 3 meses ou que pesem mais de 5 kg podem tomar dipirona caso haja indicação médica</p>
        </details>
        <details>
          <summary>Quais os cuidados com a dipirona?</summary>
          <p>Cuidados de administração: siga a orientação do seu médico, respeitando sempre os horários, as doses e a duração do tratamento. A dipirona sódica não deve ser administrada em altas doses ou por períodos prolongados, sem controle médico.</p>
        </details>
      </section>
    
      <ListaMedicamentos/>

    </>
  )
}
