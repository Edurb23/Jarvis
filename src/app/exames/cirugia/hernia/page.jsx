import React from 'react'
import Image from 'next/image'
import '../style.scss'

export default function Hernia() {
  return (
    <>
      <div className='conteudo' >
        <div className='titulo'>
          <h1>Sobre a Catarata</h1>

          <Image  src="/image/hernia.jpg"
              width={600}
              height={600}
              alt="Imagem da exame de catarata"
              className='bannerImage'
              
            />

        </div>
          
        <div className='texto-conteudo'>
         
          <p>
           <strong>Cirugia:</strong>cirurgia de hérnia é um procedimento que repara uma fraqueza na parede abdominal.  <br />
           <strong>Anestesia: </strong>Administração de anestesia para evitar dor durante a cirurgia. <br />
           <strong>Incisão: </strong>O cirurgião faz uma incisão sobre a hérnia para acessar a área afetada. <br />
           <strong>Reparo: </strong>A hérnia é reparada e a parede abdominal é fortalecida usando suturas ou uma tela cirúrgica. <br />
           <strong>Fechamento: :</strong> : As camadas da parede abdominal são suturadas após o reparo.
            Na recuperação, os pacientes são monitorados e recebem orientações para cuidados pós-operatórios, como repouso e limitação de atividades. A maioria pode retomar as atividades normais após algumas semanas de recuperação.

          </p>
          </div>

      </div>

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>Quais são os sintomas?</summary>
          <p> O quadro clínico de um paciente com hérnia abdominal geralmente é referido como um aumento de volume localizado, causando abaulamento na parede/forma do abdome, associado a dor ou desconforto local. Os sintomas tipicamente são mais pronunciados após esforço físico, enquanto que tendem a melhorar ao repouso em decúbito dorsal.
          Pacientes com hérnias inguinais podem apresentar parestesias e dores irradiadas para a bolsa escrotal, relacionadas a irritação ou compressão de nervos do canal inguinal pela hérnia.
          </p>
          
        </details>
        <details>
          <summary>Como o diagnóstico é realizado?</summary>
          <p> Na maioria dos casos, as hérnias são diagnosticadas apenas pelo exame clínico. A presença de um abaulamento localizado em algum ponto do abdome, que aparece ou se acentua com o aumento da pressão intra-abdominal (exercício físico, abdominal, tosse) e reduz ou desaparece com o repouso são bastantes sugestivos de hérnia abdominal. Entretanto, hérnias mais complexas ou pacientes obesos eventualmente requerem exames de imagem para sua confirmação. Nestes casos, a ecografia da parede abdominal, tomografia ou mesmo ressonância de abdome podem ser necessários.</p>
        </details>
        <details>
          <summary>O que é uma hérnia de parede abdominal?</summary>
          <p> A hérnia abdominal é uma protrusão de um órgão ou víscera através de um orifício ou defeito na parede abdominal. As hérnias abdominais caracterizam-se pelo defeito congênito ou adquirido de camadas da parede abdominal que permitem a protrusão de conteúdo intra-abdominal por entre as camadas, podendo gerar abaulamentos na forma do abdome.</p>
        </details>
      </section>
    </>
  )
}
