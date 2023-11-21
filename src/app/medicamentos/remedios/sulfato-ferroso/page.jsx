import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ListaMedicamentos from '@/components/ListaMedicamentos/listaMedicamentos'
import './sulfato-ferroso.scss'

export default function SufatoFerroso() {
  return (
    <>
      <div className='titulo'>

        <h1 className='titulo-principal'> Sufato Ferroso</h1>

        


      </div>

      <div className='conteudo-sufato' >
        <div className='titulo-sufato'>
          <h4>Sobre a Sufato Ferroso</h4>
        </div>
        <div className='texto-conteudo-sufato'>
          <p>
          Sulfato Ferroso é um suplemento de ferro usado para tratar e prevenir a anemia ferropriva, uma condição resultante da deficiência de ferro no organismo. Ajuda a aumentar os níveis de ferro no sangue, necessário para a produção de hemoglobina, essencial para o transporte de oxigênio no corpo. Geralmente é prescrito em casos de anemia diagnosticada por um profissional de saúde, seguindo uma dosagem específica conforme a orientação médica. O Sulfato Ferroso pode causar efeitos colaterais gastrointestinais, como constipação ou irritação estomacal, e deve ser tomado com cautela, especialmente por pessoas com problemas gastrointestinais pré-existentes. É importante seguir as instruções médicas para evitar sobredosagem e para garantir a eficácia do tratamento.
          </p>

        </div>

      </div>
        
      <div className='imagem-remedio'>
        <Image  src="/image/sufato.png"
              width={450}
              height={420}
              alt="Imagem da caixa de Paracetamol"
              className='image'
              
            />
           
      </div>

      <dir className= "link-compra">
      <Link className='a' href="https://www.drogariasaopaulo.com.br/sulfato-ferroso-270mg-c-60-comprimidos---arte-nativa-935280872/p" target='_blank' > Compre Agora</Link>
      </dir>

      

      <div className='faq-titulo'>
        <h4>Perguntas Frequentes</h4>
      </div>

      <section className='faq'>
        <details>
          <summary>O que corta o efeito do sulfato ferroso?</summary>
          <p>Medicamentos contendo alumínio, magnésio ou citrato de bismuto diminuem a absorção de ferro. O uso concomitante com cimetidina, omeprazol, metildopa, também reduz a absorção do ferro, enquanto que o álcool favorece sua absorção.</p>
        </details>
        <details>
          <summary>Quais os cuidados com o sulfato ferroso?</summary>
          <p>
          -Observar as reações adversas, contra-indicações e advertências e só fazer uso do medicamento sob orientação médica. <br />
          -Categoria de risco na gravidez: A.  <br /> 
          -Este medicamento pode ser utilizado durante a gravidez desde que sob prescrição médica ou do cirurgião-dentista.   <br />
          </p>
        </details>
        <details>
          <summary>O que o sulfato ferroso faz no nosso corpo?</summary>
          <p>Para melhorar a absorção do ferro, recomenda-se a ingestão de alimentos ricos em vitamina C, disponível na laranja, acerola e limão, e deve-se evitar tomar grandes quantidades de chá ou café, que dificultam sua absorção.</p>
        </details>
      </section>

      <ListaMedicamentos/>

    </>
  )
}
