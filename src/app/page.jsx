import Conteudo from "@/components/Conteudo/conteudo"
import Image from 'next/image'
import './home.scss'

export default function Home() {
  return (
  <>
    <section className="banner">
        <Image
        src= "/image/banner-exame.png" 
        width={500}
        height={600}
        alt ="banner"
        className='bannerImage'
        />
</section>
    <Conteudo/>
  </>
  )
}
