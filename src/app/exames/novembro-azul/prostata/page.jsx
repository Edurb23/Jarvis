import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './novembro.scss'

export default function NovembroAzul() {
    return (
        <>
            <div className='conteudo' >
                <div className='titulo'>
                    <h1>Novembro AZUL</h1>

                    <Image src="/image/novembro-azul.png"
                        width={600}
                        height={600}
                        alt="Imagem da exame de catarata"
                        className='bannerImage'

                    />


                </div>

                <div className='texto-conteudo'>

                    <h2>Novembro Azul: Promovendo a Conscientização sobre a Saúde Masculina</h2>

                    <p>
                        Novembro Azul é mais do que apenas uma cor que domina o cenário deste mês; é um movimento global que visa conscientizar e promover a saúde masculina, especialmente no que diz respeito ao câncer de próstata. Essa campanha, que teve início na Austrália em 2003, ganhou proporções mundiais e se tornou um símbolo de solidariedade, informação e prevenção.

                        O câncer de próstata é o segundo tipo mais comum entre os homens, sendo superado apenas pelo câncer de pele. A conscientização sobre a importância da prevenção e do diagnóstico precoce é fundamental para aumentar as chances de tratamento bem-sucedido e, consequentemente, salvar vidas. O Novembro Azul busca quebrar tabus e incentivar os homens a cuidarem da própria saúde, compreendendo que a prevenção é a chave para uma vida mais saudável e longeva.

                        Um dos principais objetivos do Novembro Azul é desmistificar o exame de toque retal, muitas vezes temido e evitado por receios culturais. Esclarecer que a detecção precoce pode fazer toda a diferença na trajetória da doença é crucial. Além disso, a campanha aborda a importância de exames regulares e do acompanhamento médico para monitorar a saúde da próstata.

                        A participação ativa da sociedade, empresas e instituições de saúde é fundamental para o sucesso da campanha. A disseminação de informações corretas sobre o câncer de próstata e a promoção de hábitos de vida saudáveis são estratégias essenciais para a prevenção da doença.

                        O Novembro Azul também destaca a importância do apoio emocional, uma vez que o diagnóstico de câncer afeta não apenas o corpo, mas também a mente. Incentivar o diálogo aberto, oferecer suporte psicológico e fortalecer a rede de apoio são ações que contribuem para o bem-estar integral do paciente.

                        Neste mês, vestir azul vai além da escolha de uma cor; é um gesto simbólico de solidariedade e comprometimento com a saúde masculina. Ao aderir ao Novembro Azul, cada indivíduo se torna um agente de mudança, contribuindo para a construção de uma sociedade mais consciente e saudável.

                        Portanto, que o Novembro Azul seja mais do que um mês de conscientização, mas um período de transformação de mentalidades e hábitos, promovendo a saúde dos homens e incentivando a busca constante por uma vida plena e equilibrada. <Link href="https://www.gov.br/inca/pt-br/assuntos/campanhas/2023/novembro-azul"  target='_blank' >leia mais sobre</Link>
                    </p>


                </div>

            </div>

            <div className='faq-titulo'>
                <h4>Perguntas Frequentes</h4>
            </div>

            <section className='faq'>
                <details>
                    <summary>O que é o Novembro Azul?</summary>
                    <p>O Novembro Azul é uma campanha internacional dedicada à conscientização e prevenção do câncer de próstata. Durante esse mês, diversas ações são promovidas para alertar os homens sobre a importância da realização de exames preventivos, como o exame de PSA (Antígeno Prostático Específico) e o toque retal, visando a detecção precoce da doença.
                    </p>

                </details>
                <details>
                    <summary>Quais são os principais objetivos da campanha Novembro Azul?</summary>
                    <p> Os objetivos do Novembro Azul incluem sensibilizar a população masculina para a importância da prevenção do câncer de próstata, desmistificar o preconceito em relação aos exames, incentivar a busca por diagnóstico precoce e promover hábitos saudáveis de vida. A campanha também visa informar sobre os fatores de risco associados ao câncer de próstata e destacar a necessidade de acompanhamento médico regular.</p>
                </details>
                <details>
                    <summary>Quais são os grupos de homens mais suscetíveis ao câncer de próstata?</summary>
                    <p> Homens com idade acima de 50 anos, aqueles com histórico familiar da doença, e indivíduos de raça negra têm maior predisposição ao câncer de próstata. No entanto, é importante ressaltar que a conscientização e prevenção devem ser uma preocupação para todos os homens, independentemente da idade ou fatores de risco, uma vez que o diagnóstico precoce aumenta significativamente as chances de tratamento bem-sucedido.</p>
                </details>
            </section>
        </>
    )
}
