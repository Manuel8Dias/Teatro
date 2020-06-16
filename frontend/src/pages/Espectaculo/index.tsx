import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './styles.css'

interface Teatro {
    id: number,
    nome: string,
    cartaz: string,
    autor: string,
    encenador: string,
    actores: string,
    cenografia: string,
    figurinos: string,
    desenhoDeLuz: string,
    sala: string,
    edificio:string,
    cidade: string,
    estreia: string,
}

const Espectaculo = () => {

    
    const [espectaculos , setEspectaculos] = useState<Teatro[]>([])

    useEffect (()=> {
        async function loadApi() {
            const espectaculo = await api.get('espectaculos')
            setEspectaculos(espectaculo.data)
        }

        loadApi()
    }, [])

    return (
        <div className="espectaculo" id="espectaculos">
        {espectaculos.map( (Espectaculo) => {
            return(
                <article key={ Espectaculo.id }>
                    <img src={ Espectaculo.cartaz } alt={ Espectaculo.nome }/>
                    <h1>{ Espectaculo.nome }</h1>
                    <h2>Autor: { Espectaculo.autor }</h2>
                    <h2>Encenador: { Espectaculo.encenador }</h2>
                    <h2>Actores: { Espectaculo.actores }</h2>
                    <h2>Cenografia: { Espectaculo.cenografia }</h2>
                    <h2>Desenho de Luz: { Espectaculo.desenhoDeLuz }</h2>
                    <h2>Sala: { Espectaculo.sala }</h2>
                    <h2>Edificio: { Espectaculo.edificio }</h2>
                    <h2>Cidade: { Espectaculo.cidade }</h2>
                    <h2>Data de Estreia: { Espectaculo.estreia }</h2>
                </article>
                
            )
        })}
    </div>
    )
}

export default Espectaculo