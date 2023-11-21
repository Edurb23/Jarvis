import React from 'react'
import './medicamentos.scss'
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'

export default function Medicamentos() {
  return (
    <>
      <div className='titulo'>

        <h1 className='titulo-principal'> Medicamentos</h1>


      </div>

      <div>
        <div className='conteudo' >

          <div className='texto-conteudo'>

            <p>Em nosso espaço dedicado a medicamentos, proporcionamos a você um guia abrangente e confiável. Nosso objetivo é ser a fonte central onde você pode encontrar informações detalhadas sobre uma variedade de medicamentos, desde os mais comuns até opções especializadas.
              Apresentamos dados completos sobre composição, posologia, efeitos colaterais e interações medicamentosas. Utilize nossa barra de busca intuitiva para encontrar rapidamente o que precisa, seja pelo nome do medicamento ou pelo princípio ativo.Valorizamos a transparência e, por isso, incentivamos a comunidade a compartilhar experiências reais. Leia avaliações de outros usuários, enriquecendo seu conhecimento e proporcionando uma visão prática sobre diferentes medicamentos.Nossa equipe é composta por especialistas comprometidos em fornecer informações precisas e atualizadas. Estamos aqui para ser sua fonte confiável de conhecimento sobre medicamentos, capacitando você a tomar decisões informadas sobre sua saúde.
              Explore nossa página, descubra o que precisa e confie em nós para ser seu guia na jornada para o bem-estar. Bem-vindo à sua fonte confiável de informações de saúde.
            </p>
          </div>

        </div>
      </div>

      <div className='titulo-medicamentos'>

        <h2 className='subtitulo'>Remedios que voce procura</h2>

      </div>

      <div className='cards'>

        <div className='card-caixa'>
          <div >
            <Image src="/image/paracetamol.jpg"
              width={250}
              height={220}
              alt="Imagem da caixa de Paracetamol"
              className='card-image'
            />
            <div className='card-text'>
              <Link href="medicamentos/remedios/paracetamol" className='link'>
                <h4 className='cards-titulo' > Paracetamol</h4>

                <p className='saiba-mais'>saiba mais...</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='card-caixa'>
          <div className='card-image'>
            <Image src="/image/dipirona.jpg"
              width={250}
              height={220}
              alt="Imagem da caixa de Dipirona"
              className='card-image'
            />
            <div className='card-text'>
              <Link href="medicamentos/remedios/dipirona" className='link'>
                <h4 className='cards-titulo' >Dipirona</h4>
                <p className='saiba-mais'>saiba mais...</p>
              </Link>
            </div>
          </div>

        </div>
        <div className='card-caixa'>
          <div className='card-image'>
            <Image src="/image/losartana.jpg"
              width={250}
              height={220}
              alt="Imagem da caixa de Lorsartana"
              className='card-image'
            />
            <div className='card-text'>
              <Link href="medicamentos/remedios/losartan" className='link'>
                <h4 className='cards-titulo' >Lorsartana</h4>
                <p className='saiba-mais'>saiba mais...</p>
              </Link>
            </div>
          </div>

        </div>

      </div>

      <ListaMedicamentos />

      <div className='conteudo-medicamento' >
        <div className='titulo-conteudo-medicamento'>
          <h4>
            Consequências de Uso Incorreto de Medicamentos: Cuidado e Consciência são Essenciais</h4>
        </div>
        <div className='texto-conteudo-medicamento'>
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
