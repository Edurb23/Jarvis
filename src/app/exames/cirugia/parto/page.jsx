import React from 'react'
import Image from 'next/image'
import '../style.scss'



export default function Parto() {
  return (
    <>
    <div className='conteudo' >
        <div className='titulo'>
          <h1>Sobre o Parto Cesariano </h1>

          <Image  src="/image/parto-cesariano.jpg"
              width={600}
              height={600}
              alt="Imagem da exame de catarata"
              className='bannerImage'
              
            />

        </div>
          
        <div className='texto-conteudo'>
         
          <p>
           <strong>Parto Cesariano:</strong>A cesariana é um procedimento cirúrgico em que uma incisão é feita na região abdominal inferior para remover o bebê do útero. <br />
           <strong>Preparação:</strong>A paciente recebe anestesia para não sentir dor durante a cirurgia. <br />
           <strong>Procedimento:</strong>O médico faz uma incisão na barriga, abre os tecidos, retira o bebê e a placenta, e sutura os tecidos. <br />
           <strong>Recuperação:</strong>Após a cirurgia, a paciente é monitorada e recebe orientações para os cuidados pós-operatórios. <br />
           <strong>Conclusão:</strong> A cesariana é um procedimento cirúrgico importante e seguro, porém, como qualquer procedimento, envolve riscos e requer cuidados pós-operatórios adequados. É geralmente realizada em casos de necessidade médica, quando o parto vaginal representa riscos para a mãe ou para o bebê, ou por opção da paciente, em alguns casos.
          </p>
          </div>

      </div>
      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>Quanto tempo demora para se recuperar de uma cesárea?</summary>
          <p>Após a cesárea, a mulher deve ficar pelo menos cinco dias de repouso completo, mas o tempo de recuperação total pode levar até seis semanas</p>
        </details>
        <details>
          <summary>Quais os cuidados que devo ter após uma cesárea?</summary>
          <p>Tanto a cicatriz de episiotomia quanto a da cesárea devem ser higienizadas com água e sabonete pelo menos uma a duas vezes por dia. As dores abdominais decorrentes da cesárea e as causadas pela episiotomia desaparecem gradativamente e são controladas com simples analgésicos prescritos no momento da alta hospitalar.</p>
        </details>
        <details>
          <summary>Quais são os riscos de um parto cesárea?</summary>
         <p>A cesárea pode ser associada a uma maior perda de sangue, lesão de órgãos abdominais e infecção na incisão cirúrgica, além de aumento do risco tromboembólico e chance de hemorragia pós-parto</p>
        </details>
      </section>
    </>
  )
}
