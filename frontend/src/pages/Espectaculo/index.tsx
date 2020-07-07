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
        <div className="espectaculo">

        { espectaculos.map(Espectaculo => (
            <div key={Espectaculo.id} className="espectaculoBorder">

                <h1 >{ Espectaculo.nome }</h1>

                <div className="registoEspectaculo">

                <aside className="cartaz">
                    <img src={Espectaculo.cartaz} alt="Cartaz"/>
                </aside> 

                <div className="dadosEspectaculo">

                    <div className="infoEspectaculo">
                        <h4>Autor: </h4>
                        <p>{ Espectaculo.autor }</p>
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Encenador: </h4>
                        <p>{ Espectaculo.encenador }</p>
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Actores: </h4>
                        <p>{ Espectaculo.actores }</p>
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Cenografia: </h4>
                        <p>{ Espectaculo.cenografia }</p>
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Figurinos: </h4>
                        <p>{ Espectaculo.figurinos }</p>
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Desenho de Luz: </h4>
                        <p>{ Espectaculo.desenhoDeLuz }</p>
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Sala: </h4>
                        <p> { Espectaculo.sala } - { Espectaculo.edificio }</p>  
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Cidade: </h4>
                        <p>{ Espectaculo.cidade }</p>  
                    </div>

                    <div className="infoEspectaculo">
                        <h4>Data da Estreia: </h4>
                        <p>{ Espectaculo.estreia }</p>  
                    </div>

                 </div> {/* END dadosEspectaculo */}

                 </div> {/* END registoEspectaculo */}

             </div> //espectaculoCard end 
        ))} 

    </div>
    )

}
export default Espectaculo