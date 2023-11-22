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
      <Link href="#" className='link'>
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
      <Link href="#" className='link'>
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
      <Link href="#" className='link'>
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
      <Link href="#" className='link'>
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
      <Link href="#" className='link'>
        <h4 className='cards-titulo' >Artroplastia </h4>
        <p className='saiba-mais'>saiba mais...</p>
      </Link>
    </div>
  </div>

</div>

</div>


    </>
  )
}
