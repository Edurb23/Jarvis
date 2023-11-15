import Conteudo from "@/components/Conteudo/conteudo"
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <section className="banner">
        <Image
        src= "/image/banner-jarvis.png" 
        width={100}
        height={100}
        alt ="banner"
        className='bannerImage'
        />
</section>
    <Conteudo/>
  </>
  )
}
