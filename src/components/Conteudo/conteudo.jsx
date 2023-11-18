import React from 'react'
import './conteudo.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function conteudo() {
  return (
    <>
    
    <div className='titulo'>
        <h4 className='titulo-home'>
          Voce pode se interessar
        </h4>
    </div>
    <div className='cards'>
      <div className='card-caixa'>
        <div >
        <Image src= "/image/banner-exame.png" 
            width={250}
            height={220}
            alt ="Imagem do card de exames"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/exames" className='link'> 
                  <h4 className='cards-titulo' > Orientação de Exames</h4>
                  <p className='card-texto'>Saiba oque fazer antes e depois dos seus exames e cirugias.Previna-se. Consulte regularmente</p>
                  <p>saiba mais...</p>
              </Link>
              </div>
        </div>
      </div>
      <div className='card-caixa'>
      <div className='card-image'>
      <Image src= "/image/banner-medicamento.png" 
            width={250}
            height={220}
            alt ="Imagem do card de medicamento"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/medicamentos" className='link'> 
                  <h4 className='cards-titulo' >  Seus medicamentos</h4>
                  <p className='card-texto'>Voce sabe o que voce pode fazer tomando o seu medicamento?Tome corretamente.Saúde em foco</p>
                  <p>saiba mais...</p>
              </Link>
            </div>
        </div>
          
      </div>
      <div className='card-caixa'>
      <div className='card-image'>
      <Image src= "/image/novembro-azul.png" 
            width={250}
            height={220}
            alt ="Imagem da campanha do novembro azul"
            className='card-image'
            />
             <div className='card-text'>
              <Link href="/exames" className='link'> 
                  <h4 className='cards-titulo' > Novembro Azul</h4>
                  <p className='card-texto'> 
                  Previna-se! Novembro Azul: Cuide da sua saúde. Exames. Converse. Previna. Homens, vamos juntos pela conscientização
                  </p>
                  <p>saiba mais...</p>
              </Link>
            </div>
        </div>
          
      </div>
     
    </div>

    <div className='conteudo' >
      <div className='titulo-conteudo'>
        <h4>Nosso projeto SurgeryCare</h4>
          </div>
          <div className='texto-conteudo'>
            <p>A Jarvis criou a SurgeryCare que revoluciona a experiência de cuidados pré e pós-operatórios, assim como os cuidados médicos e nutricionais, trazendo tudo para a comodidade do seu lar. Desde um pré-operatório personalizado até um pós-operatório simplificado, nossa plataforma integra cuidados médicos remotos e suporte nutricional, garantindo uma jornada de recuperação centrada no paciente.
            Seja antes, durante ou após uma intervenção médica, a SurgeryCare está ao seu lado, trazendo inovação para os cuidados de saúde no conforto da sua casa. Nosso serviço abrange desde um pré-operatório personalizado, com informações essenciais e suporte emocional, até um pós-operatório simplificado, com monitoramento remoto e comunicação direta com profissionais de saúde. Além disso, oferecemos cuidados médicos remotos e suporte nutricional integrado, assegurando uma jornada de recuperação completa e personalizada. Na [Nome da Startup], sua saúde está no centro de tudo, e estamos aqui para tornar sua jornada de cuidados de saúde mais acessível, eficiente e confortável.
            </p>
            
          </div>

    </div>

    <div className='clientes-titulo'>
      <h4>Nossos clientes</h4>
    </div>

    <div className='clientes'>
      <div className='cards-clientes'>
      <div className='cliente1'>
      <Image src= "/image/cliente1.jpg" 
            width={250}
            height={220}
            alt ="Imagem de um cliente"
            className='card-image'
            
            />
        <p>
            gosto muito de usar aqui
            <br />
              <strong>ana silva</strong>
          </p>

      </div>
      <div className='cliente1'>
      <Image src= "/image/cliente1.jpg" 
            width={250}
            height={220}
            alt ="Imagem de um cliente"
            className='card-image'
            
            />
        <p>
            gosto muito de usar aqui
            <br />
              <strong>ana silva</strong>
          </p>

      </div>
      <div className='cliente1'>
      <Image src= "/image/cliente1.jpg" 
            width={250}
            height={220}
            alt ="Imagem de um cliente"
            className='card-image'
            
            />
        <p>
            gosto muito de usar aqui
            <br />
              <strong>ana silva</strong>
          </p>

      </div>
      
        
      </div>
    </div>
    
    </>
  )
}
