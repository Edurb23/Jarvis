import React from 'react'
import './listaMedicamentos.scss'
import Link from 'next/link'

export default function ListaMedicamentos() {
    return (
        <>
            <div className='lista' >



                <ul className='lista-medicamentos'>
                    <li>
                        <Link href="/" className='a'>Paracetamol</Link>
                    </li>
                    <li>
                        <Link href="/" className='a' >Omeprazol</Link>
                    </li>
                    <li>
                        <Link href="/" className='a'>Losartan</Link>
                    </li>
                    <li>
                        <Link href="/" className='a'>Dipirona</Link>
                    </li>
                    <li>
                        <Link href="/" className='a'>Sulfato Ferroso</Link>
                    </li>
                    <li>
                        <Link href="/" className='a'>Atenolol</Link>
                    </li>

                </ul>


            </div>

        </>
    )
}
