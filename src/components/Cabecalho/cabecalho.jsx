"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./cabecalho.scss"
import { useState} from 'react'


export default function Cabecalho() {
    const [ativo, setAtivo] = useState(false);

    const handleClick = () => {
      const nav = document.querySelector('.nav');
      setAtivo(!ativo);
      nav.classList.toggle('active');
    };
  
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

          <nav >
           <button className='burger' onClick={handleClick}></button>

            <ul>
                <li>
                <Link href="/" className='a'>Login</Link>
                </li>
                <li>
                <Link href="/" className='a'>Tratamento</Link>
                </li>
                <li>
                <Link href="/" className='a'>Exames</Link>
                </li>
                <li>
                <Link href="/" className='a'>Medicamentos</Link>
                </li>
              
            </ul>
           
          </nav>

        
    </header>
   </>
  )
}
