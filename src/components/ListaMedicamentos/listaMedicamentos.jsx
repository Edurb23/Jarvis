import React from 'react'
import './listaMedicamentos.scss'
import Link from 'next/link'

export default function ListaMedicamentos() {
    return (
        <>
            <div className='lista' >



                <ul className='lista-medicamentos'>
                    <li>
                        <Link href="/atenolol">Atenolol</Link>
                    </li>
                    <li>
                        <Link href="/dipirona" className='a'>Dipirona</Link>
                    </li>
                    <li>
                        <Link href="/losartana" className='a'>Losartan</Link>
                    </li>
                    <li>
                        <Link href="/omeprazol" className='a' >Omeprazol</Link>
                    </li>
                    <li>
                        <Link href="/paracetamol" className='a'>Paracetamol</Link>
                    </li>
                    <li>
                        <Link href="/sufato-ferroso" className='a'>Sulfato Ferroso</Link>
                    </li>

                </ul>


            </div>

        </>
    )
}
