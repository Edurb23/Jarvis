import React from 'react'
import Image from 'next/image'
import '../style.scss'

export default function Artroplastia() {
  return (
    <>
     <div className='conteudo' >
        <div className='titulo'>
          <h1>Sobre a Artroplastia de Quadril ou Joelho</h1>

          <Image  src="/image/artroplastia.jpg"
              width={600}
              height={600}
              alt="Imagem da exame de catarata"
              className='bannerImage'
              
            />

        </div>
          
        <div className='texto-conteudo'>
         
          <p>
           <strong>Cirugia:</strong>Tanto a artroplastia de quadril quanto a de joelho são procedimentos cirúrgicos para substituir articulações danificadas por próteses.  <br />
           <strong>Preparação e Anestesia: </strong>O paciente recebe anestesia para adormecer a área. <br />
           <strong>Acesso e Remoção:  </strong> Uma incisão é feita para acessar a articulação afetada. <br />
           <strong>Remoção e Preparação:</strong> :As partes danificadas do osso são removidas e a área é preparada para a prótese. <br />
           <strong>Implantação da Prótese:</strong>A prótese é colocada e fixada no osso. <br />
           <strong>Fechamento:</strong>A incisão é suturada para fechar a área operada. <br />
           <strong>Conclusão:</strong>Estes procedimentos são realizados para aliviar a dor e melhorar a função articular em pessoas com doenças articulares graves, como osteoartrite avançada. É importante seguir as instruções médicas para uma recuperação adequada e eficaz <br />
           </p> 
           
           
          </div>

      </div>

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>Voltarei a andar sem dor e sem mancar?</summary>
         <p>Sim! Com a substituição da articulação doente por uma funcional a dificuldade de andar e a dor desaparecem. 
          Com isso, o paciente também deixa de mancar
          </p>
          
        </details>
        <details>
          <summary>Qual é o preparo necessário para a cirurgia?</summary>
          <p> Existe todo um planejamento Pré, onde o cirurgião solicita vários exames laboratoriais, Rx e Eletrocardiograma e também é agendado uma avaliação clínica pré operatória onde será esclarecidas dúvidas a respeito das medicações usadas pelo paciente as quais são necessárias suspender entre outras duvidas.</p>
        </details>
        <details>
          <summary>Existe necessidade de transfusão de sangue?</summary>
          <p> Em alguns casos sim pois os pacientes submetidos a artroplastia total de quadril tipicamente perdem mais de 500 ml de sangue durante a  cirurgia. Antes de ocorrer a transfusão é avaliado o estado geral do paciente.</p>
        </details>
      </section>
    </>
    
  )
}
