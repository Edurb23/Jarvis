import Conteudo from "@/components/Conteudo/conteudo"
import Image from "next/image"

import './home.scss'

export default function Home() {
  return (
    <>
    <section className="banner">
        <Image
        src= "/image/banner-jarvis.png" 
        width={200}
        height={400}
        alt ="banner"
        className='bannerImage'
        />
</section>
    <Conteudo/>
  </>

  )
}
