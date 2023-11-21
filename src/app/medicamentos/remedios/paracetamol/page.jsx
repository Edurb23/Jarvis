import React from 'react'
import "./paracetamol.scss"
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'

export default function Paracetamol() {
  return (
    <>
    <div className='titulo'>

      <h1 className='titulo-principal'> Paracetamol</h1>

      


    </div>

    <div className='conteudo-paracetamol' >
      <div className='titulo-paracetamol'>
        <h4>Sobre a Paracetamol</h4>
      </div>
      <div className='texto-conteudo-paracetamol'>
        <p>
        Conhecido como acetaminofeno, é um medicamento analgésico e antipirético usado para aliviar dores leves a moderadas e reduzir a febre. Atua no sistema nervoso central para reduzir a percepção da dor e na regulação da temperatura para diminuir a febre. Deve ser usado conforme a prescrição médica ou as instruções na embalagem, evitando doses excessivas que podem prejudicar o fígado. É importante estar ciente de possíveis interações medicamentosas e seguir as recomendações para um uso seguro.
        </p>

      </div>

    </div>
      
    <div className='imagem-remedio'>
      <Image  src="/image/paracetamol.jpg"
            width={450}
            height={420}
            alt="Imagem da caixa de Paracetamol"
            className='image'
            
          />
         
    </div>

    <dir className= "link-compra">
    <Link className='a' href="https://www.drogariasaopaulo.com.br/paracetamol-750mg-generico-ems-20-comprimidos/p" target='_blank' > Compre Agora</Link>
    </dir>

    

    <div className='faq-titulo'>
      <h4>Perguntas Frequentes</h4>
    </div>

    <section className='faq'>
      <details>
        <summary>O paracetamol é seguro ?</summary>
        <p>Sim, o paracetamol é seguro quando usado conforme as instruções na bula, mas se você usar mais do que a dose recomendada, você pode danificar seu fígado. Algumas pessoas acidentalmente excedem a dose recomendada ao tomar vários produtos ao mesmo tempo, porque elas não sabem que seus medicamentos contêm paracetamol ou elas não leram e seguiram as instruções de dosagem. É por isso que é importante ler e seguir as instruções da bula dos seus medicamentos e tomar apenas um medicamento por vez contendo paracetamol.</p>
      </details>
      <details>
        <summary>Como posso tomar paracetamol  com segurança ?</summary>
       <p>A maneira correta de tomar paracetamol é sempre ler a bula e seguir as instruções de dosagem de cada medicamento que você toma, com ou sem receita médica. Nunca tome mais do que a dose recomendada, e tome apenas um medicamento por vez contendo paracetamol. Em caso de dúvidas, consulte seu médico.</p>
      </details>
      <details>
        <summary>O paracetamol  é seguro para as crianças ?</summary>
       <p>O paracetamol tem sido utilizado por pais e profissionais de saúde há anos para aliviar a dor e reduzir febres. Quando usado conforme a orientação, o paracetamol é seguro e eficaz. Nunca dê medicamentos de adultos para crianças, pois isso pode causar sérios danos. Se você tomar uma quantidade de paracetamol maior do que a recomendada, isto pode prejudicar o seu fígado. É por isso que é importante sempre ler e seguir a bula, e nunca administrar mais do que a dose recomendada - ou mais de um medicamento que contenha paracetamol, ao mesmo tempo.</p>
      </details>
    </section>

    <ListaMedicamentos/>

  </>
  )
}
