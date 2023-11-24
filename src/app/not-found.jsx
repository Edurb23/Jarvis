import React from 'react'
import "./home.scss"
import Image from "next/image"
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
    
    <section className="banner">
        <Image
        src= "/image/banner-erro.png" 
        width={1000}
        height={600}
        alt ="banner"
        className='bannerImage'
        />
        </section>

        <h1 className='titulo-erro'>OOPS! 404</h1>
    <p className='subtitulo-erro'>!NOT FOUND</p>

    <Link href="/" className='voltar-erro'>
    <h4>Voltar</h4>
    </Link>
    </>
  )
}