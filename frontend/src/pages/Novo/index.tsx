import React, { useState } from 'react'
import './styles.css'

const Novo = () => {
    return (
        <div className="novoContainer">
            
            <form className="formularioCriar">

                <div className="valorRegisto">
                    <label>Nome:</label>
                    <input type="text" placeholder="Nome" />
                </div>

                <div className="valorRegisto">
                    <label>Cartaz:</label>
                    <input type="text" placeholder="Cartaz" />
                </div>

                <div className="valorRegisto">
                    <label>Autor:</label>
                    <input type="text" placeholder="Autor" />
                </div>

                <div className="valorRegisto">
                    <label>Encenador:</label>
                    <input type="text" placeholder="Encenador" />
                </div>

                <div className="valorRegisto">
                    <label>Actores:</label>
                    <input type="text" placeholder="Actores" />
                </div>

                <div className="valorRegisto">
                    <label>Cenografia:</label>
                    <input type="text" placeholder="Cenografia" />
                </div>

                <div className="valorRegisto">
                    <label>Figurinos:</label>
                    <input type="text" placeholder="Figurinos" />
                </div>

                <div className="valorRegisto">
                    <label>Desenho de Luz:</label>
                    <input type="text" placeholder="Desenho de Luz" />
                </div>

                <div className="valorRegisto">
                    <label>Sala:</label>
                    <input type="text" placeholder="Sala" />
                </div>

                <div className="valorRegisto">
                    <label>Edificio:</label>
                    <input type="text" placeholder="Edificio" />
                </div>

                <div className="valorRegisto">
                    <label>Ciade:</label>
                    <input type="text" placeholder="Cidade" />
                </div>
                
                <div className="valorRegisto">
                    <label>Estreia:</label>
                    <input type="text" placeholder="Estreia" />
                </div>

                <button type="submit" className="criar">Criar</button>
            </form>
        </div>
    )
}

export default Novo