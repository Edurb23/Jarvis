import React from 'react'
import './catarata.scss'
import Image from 'next/image'

export default function Catarata() {
  return (

    <>
    
  

  <div className='conteudo-catarata' >
        <div className='titulo-catarata'>
          <h1>Sobre a Catarata</h1>

          <Image  src="/image/exame-de-catarata.jpg"
              width={600}
              height={600}
              alt="Imagem da exame de catarata"
              className='bannerImage'
              
            />

        </div>
          
        <div className='texto-conteudo-catarata'>
         
          <p>
           <strong>Cirugia:</strong>A cirurgia de catarata é um procedimento oftalmológico comum para remover um cristalino embaçado e substituí-lo por uma lente artificial, restaurando a visão. <br />
           <strong>Preparação:</strong>Exames são feitos para avaliar a saúde ocular e colírios são aplicados para dilatar a pupila e anestesiar o olho. <br />
           <strong>Procedimento:</strong>O cirurgião faz uma pequena incisão, remove a catarata fragmentada e insere uma lente artificial. <br />
           <strong>Recuperação:</strong>Após monitoramento breve, o paciente recebe instruções de cuidados pós-operatórios e marca consultas de acompanhamento. <br />
           <strong>Conclusão:</strong> A cirurgia de catarata é considerada segura e altamente eficaz na restauração da visão comprometida pela catarata. Embora seja um procedimento comumente bem-sucedido, é importante discutir todos os aspectos, incluindo os riscos potenciais, com o oftalmologista antes da cirurgia para tomar uma decisão informada sobre o tratamento
          </p>
          </div>

      </div>

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>Qual a causa da catarata?</summary>
          <p>A catarata é uma doença de múltiplos fatores. O ser humano pode nascer com ela (catarata congênita) ou desenvolvê-la com o passar do tempo.  
          </p>
          <p>A causa mais comum da doença é o envelhecimento. No entanto, a catarata também pode surgir em decorrência de doenças sistêmicas (como diabetes), uso de medicamentos (como os corticoides), traumatismo ocular, dentre outros.</p>
        </details>
        <details>
          <summary>Quais os sintomas iniciais?</summary>
          <p>No início, a catarata pode não apresentar sintomas. Conforme a doença progride, surgem as dificuldades visuais: embaçamento, ausência de nitidez e foco nas imagens, sensibilidade aumentada à luz e alteração da visão de cores.</p>
        </details>
        <details>
          <summary>Quais os tipos de catarata</summary>
          <p><strong>Senil: </strong>costuma surgir por volta dos 60 anos de idade pelo envelhecimento natural do paciente. <br />
          <strong>Congênita:</strong>: o paciente nasce com a catarata. Deve-se às doenças genéticas próprias do recém-nascido e infecções no período gestacional. <br />
          <strong>Traumática:</strong> como o nome sugere, surge após um traumatismo no olho. <br />
          <strong>Secundária:</strong> surge de forma decorrente de uso de medicamentos (corticoides), doenças sistêmicas (diabetes). </p>
        </details>
      </section>
    </>

  
  )
}
