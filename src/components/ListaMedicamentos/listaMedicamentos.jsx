import React from 'react'
import './listaMedicamentos.scss'
import Link from 'next/link'

export default function ListaMedicamentos() {
    return (
        <>
            <div className='lista' >



                <ul className='lista-medicamentos'>
                    <li>
                        <Link href="/medicamentos/remedios/atenolol">Atenolol</Link>
                    </li>
                    <li>
                        <Link href="/medicamentos/remedios/dipirona" className='a'>Dipirona</Link>
                    </li>
                    <li>
                        <Link href="/medicamentos/remedios/losartan" className='a'>Losartana</Link>
                    </li>
                    <li>
                        <Link href="/medicamentos/remedios/omeprazol" className='a' >Omeprazol</Link>
                    </li>
                    <li>
                        <Link href="/medicamentos/remedios/paracetamol" className='a'>Paracetamol</Link>
                    </li>
                    <li>
                        <Link href="/medicamentos/remedios/sulfato-ferroso" className='a'>Sulfato Ferroso</Link>
                    </li>

                </ul>


            </div>

        </>
    )
}
