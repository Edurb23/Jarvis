"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./cabecalho.scss"



export default function Cabecalho() {
   
  const [active, setActive] = useState(false)
    

  const toggleActive = () => {
    setActive(!active)
  }
  
    return (
   <>
    <header className='cabecalho'>
        <Link href="/">

        <Image src= "/image/logoJarvis.png" 
            width={220}
            height={220}
            alt ="Imagem da logo da porto seguro"
            className='logo'
            />
          </Link>

          <nav className={`nav ${active ? 'active' : ''}`}>
           <button className='burger' onClick={toggleActive} ></button>

            <ul >
                <li>
                <Link href="/login" className='a'>Login</Link>
                </li>
                <li>
                <Link href="/tratamento" className='a'>Tratamento</Link>
                </li>
                <li>
                <Link href="/exames" className='a'>Exames</Link>
                </li>
                <li>
                <Link href="/medicamentos" className='a'>Medicamentos</Link>
                </li>
              
            </ul>
           
          </nav>

        
    </header>
   </>
  )
}
