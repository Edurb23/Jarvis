import Conteudo from "@/components/Conteudo/conteudo"
import Image from "next/image"

import './home.scss'

export default function Home() {
  return (
    <>
    <section className="banner">
        <Image
        src= "/image/banner-jarvis.png" 
        width={1000}
        height={600}
        alt ="banner"
        className='bannerImage'
        />
</section>
    <Conteudo/>
  </>

  )
}
