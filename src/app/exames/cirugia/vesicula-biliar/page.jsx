import React from 'react'
import Image from 'next/image'
import '../style.scss'

export default function VesiculaBiliar() {
  return (
    <>
     <div className='conteudo' >
        <div className='titulo'>
          <h1>Sobre a Vesícula</h1>

          <Image  src="/image/vesicula-page.png"
              width={600}
              height={600}
              alt="Imagem da exame de catarata"
              className='bannerImage'
              
            />

        </div>
          
        <div className='texto-conteudo'>
         
          <p>
           <strong>Cirugia:</strong>A colecistectomia, cirurgia de remoção da vesícula biliar, é um procedimento comum realizado para tratar problemas como pedras na vesícula.  <br />
           <strong>Anestesia: </strong>O paciente recebe anestesia geral para estar inconsciente durante a cirurgia. <br />
           <strong>Acesso e Remoção:  </strong> O cirurgião faz pequenas incisões na região abdominal para remover a vesícula biliar, muitas vezes usando laparoscopia (método minimamente invasivo) <br />
           <strong>Fechamento: :</strong> : As incisões são fechadas após a remoção da vesícula
           
          </p>
          </div>

      </div>

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>As Pedras são sempre iguais?</summary>
         <p>Há diferentes tipos e tamanhos de pedras (cálculos). Os Cálculos são formados do aumento na concentração de gordura (90%), e ou sais biliares na bile. A razão da formação dos cálculos ainda não é bem conhecida.</p>
          
        </details>
        <details>
          <summary>As pedras podem se dissolver totalmente?</summary>
          <p> Na maioria dos casos, as hérnias são diagnosticadas apenas pelo exame clínico. A presença de um abaulamento localizado em algum ponto do abdome, que aparece ou se acentua com o aumento da pressão intra-abdominal (exercício físico, abdominal, tosse) e reduz ou desaparece com o repouso são bastantes sugestivos de hérnia abdominal. Entretanto, hérnias mais complexas ou pacientes obesos eventualmente requerem exames de imagem para sua confirmação. Nestes casos, a ecografia da parede abdominal, tomografia ou mesmo ressonância de abdome podem ser necessários.</p>
        </details>
        <details>
          <summary>Todos temos o mesmo risco de ter pedras?</summary>
          <p> A hérnia abdominal é uma protrusão de um órgão ou víscera através de um orifício ou defeito na parede abdominal. As hérnias abdominais caracterizam-se pelo defeito congênito ou adquirido de camadas da parede abdominal que permitem a protrusão de conteúdo intra-abdominal por entre as camadas, podendo gerar abaulamentos na forma do abdome.</p>
        </details>
      </section>
    </>
  )
}
