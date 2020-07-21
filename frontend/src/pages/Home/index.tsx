import React, {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'

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

const Home = () => {
    const [espectaculos , setEspectaculos] = useState<Teatro[]>([])

    useEffect (()=> {
        async function loadApi() {
            const espectaculo = await api.get('espectaculos')
            setEspectaculos(espectaculo.data)
        }

        loadApi()
    }, [])

    return (
        <div className="homeContainer">
            <div className="botaoNovo">
                <Link className="novo" to="/novo">Novo Espectáculo</Link>
            </div> {/* End botaoNovo */}

            <div className="main" id="espectaculos">
                {espectaculos.map( (Espectaculo) => {
                    return(
                        <div key={ Espectaculo.id } className="espectaculoCard">
                
                    <h1 >{ Espectaculo.nome }</h1>

                    <div className="dados">
                        <h4>Autor:</h4>
                        <p>{ Espectaculo.autor }</p>
                    </div>

                    <div className="dados">
                        <h4>Encenador: </h4>
                        <p>{ Espectaculo.encenador }</p>
                    </div>

                    <div className="dados">
                        <h4>Actor:</h4>
                        <p>{ Espectaculo.actores }</p>
                    </div>

                    <div className="dados">
                        <h4>Estreia:</h4>
                        <p>{ Espectaculo.estreia }</p>  
                    </div>
                    <div className="botao">
                        <Link className="detalhes" to="espectaculos/:id">
                            Ver mais
                        </Link>
                    </div>
                </div> //espectaculoCard end 
                    )
                })}
            </div>{/* End espectaculo */}
        </div>/* End homeContainer */
    )
}

export default Home