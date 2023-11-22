import React from 'react'
import './exame.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Exames() {
  return (
    <>

      <section className="banner">
        <Image
          src="/image/banner-exame.png"
          width={1000}
          height={600}
          alt="banner"
          className='bannerImage'
        />
      </section>

      <div className='titulo'>

        <h1 className='titulo-principal'> Exames </h1>


      </div>

      <div>
        <div className='conteudo-exame' >

          <div className='texto-conteudo-exame'>
            <p>Os exames laboratoriais são uma ferramenta essencial para o diagnóstico e acompanhamento de doenças. Por meio da análise de amostras de sangue, urina, fezes, secreções e outros materiais biológicos, é possível identificar alterações que podem indicar a presença de uma doença, mesmo que ela ainda não apresente sintomas..</p>

          </div>

        </div>
      </div>

      <div className='titulo-exames'>

        <h2 className='subtitulo'>Exames que voce procura</h2>

      </div>

      <div className='cards'>

<div className='card-caixa'>
  <div >
    <Image src="/image/exame-de-catarata.jpg"
      width={250}
      height={220}
      alt="Imagem do exame de catarata"
      className='card-image'
    />
    <div className='card-text'>
      <Link href="/exames/cirugia/catarata" className='link'>
        <h4 className='cards-titulo' > Catarata</h4>

        <p className='saiba-mais'>saiba mais...</p>
      </Link>
    </div>
  </div>
</div>
<div className='card-caixa'>
  <div className='card-image'>
    <Image src="/image/parto-cesariano.jpg"
      width={250}
      height={220}
      alt="Imagem de Parto Cesariano"
      className='card-image'
    />
    <div className='card-text'>
      <Link href="exames/cirugia/parto" className='link'>
        <h4 className='cards-titulo' >Parto Cesariano</h4>
        <p className='saiba-mais'>saiba mais...</p>
      </Link>
    </div>
  </div>

</div>
<div className='card-caixa'>
  <div className='card-image'>
    <Image src="/image/hernia.jpg"
      width={250}
      height={220}
      alt="Imagem da Hérnia"
      className='card-image'
    />
    <div className='card-text'>
      <Link href="/exames/cirugia/hernia" className='link'>
        <h4 className='cards-titulo' >Hérnia</h4>
        <p className='saiba-mais'>saiba mais...</p>
      </Link>
    </div>
  </div>

</div>
<div className='card-caixa'>
  <div className='card-image'>
    <Image src="/image/vesicula.jpg"
      width={250}
      height={220}
      alt="Imagem de dois medicos fazendo Vesícula Bilia"
      className='card-image'
    />
    <div className='card-text'>
      <Link href="/exames/cirugia/vesicula-biliar" className='link'>
        <h4 className='cards-titulo' >Vesícula Biliar</h4>
        <p className='saiba-mais'>saiba mais...</p>
      </Link>
    </div>
  </div>

</div>
<div className='card-caixa'>
  <div className='card-image'>
    <Image src="/image/artroplastia.jpg"
      width={250}
      height={220}
      alt="Imagem do medico fazendo artroplastia"
      className='card-image'
    />
    <div className='card-text'>
      <Link href="/exames/cirugia/artroplastia" className='link'>
        <h4 className='cards-titulo' >Artroplastia </h4>
        <p className='saiba-mais'>saiba mais...</p>
      </Link>
    </div>
  </div>

</div>

</div>

<div className='conteudo-exame2' >
        <div className='titulo-conteudo-exame2'>
          <h4>
          Prevenção antes da cirurgia e Cuidados no pós-operatório</h4>
        </div>
        <div className='texto-conteudo-exame2'>
          <p>O uso inadequado de medicamentos é uma prática que, infelizmente, pode resultar em sérias consequências para a saúde. Quando as pessoas desviam das orientações médicas, seja por automedicação irresponsável ou pela não adesão correta à prescrição, estão inadvertidamente arriscando sua própria saúde.

            Os erros no uso de medicamentos podem se manifestar de diversas maneiras, desde a dosagem inadequada até a interação prejudicial com outros medicamentos. A negligência nesse aspecto pode comprometer a eficácia do tratamento, agravar condições médicas e, em casos extremos, levar a complicações graves.

            Um dos perigos mais comuns está na automedicação, onde indivíduos buscam soluções rápidas para sintomas sem a devida orientação profissional. O que pode parecer inofensivo à primeira vista, muitas vezes, acaba sendo uma abordagem que mascara sintomas subjacentes, retardando um diagnóstico adequado.

            A falta de adesão à prescrição médica é outra área crítica. Quando as pessoas param de tomar medicamentos antes do tempo recomendado, pulam doses ou ajustam as dosagens por conta própria, estão comprometendo a eficácia do tratamento e expondo-se a riscos desnecessários.

            É fundamental reconhecer que cada medicamento é prescrito levando em consideração a condição específica de um paciente. O uso indevido pode não apenas comprometer a eficácia do tratamento, mas também aumentar a probabilidade de efeitos colaterais indesejados.

            A conscientização sobre os perigos associados ao uso inadequado de medicamentos é crucial. Incentivar a consulta regular com profissionais de saúde, a compreensão das prescrições e a importância de seguir as orientações são passos essenciais para mitigar esses riscos. A saúde é um bem precioso, e o cuidado responsável com os medicamentos é um componente vital dessa jornada.</p>

        </div>

      </div>


    </>
  )
}
