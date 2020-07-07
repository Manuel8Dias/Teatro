import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'


const Novo = () => {
    
    // const [nome, setNome] = useState<string>('')
    // const [cartaz, setCartaz] = useState<string>('')
    // const [autor, setAutor] = useState<string>('')
    // const [encenador, setEncenador] = useState<string>('')
    // const [actores, setActores] = useState<string>('')
    // const [cenografia, setCenografia] = useState<string>('')
    // const [figurinos, setFigurinos] = useState<string>('')
    // const [desenhoDeLuz, setDesenhoDeLuz] = useState<string>('')
    // const [sala, setSala] = useState<string>('')
    // const [edificio, setEdificio] = useState<string>('')
    // const [cidade, setCidade] = useState<string>('')
    // const [estreia, setEstreia] = useState<string>('')

    const [ formData, setFormData ] = useState({
        nome: '',
        cartaz: '',
        autor: '',
        encenador: '',
        actores: '',
        cenografia: '',
        figurinos: '',
        desenhoDeLuz: '',
        sala: '',
        edificio: '',
        cidade: '',
        estreia: '',
    })

    const history = useHistory()


    function  handleInputChange(event: ChangeEvent<HTMLInputElement>) { 
        const { name, value } = event.target

        setFormData({...formData, [name]: value})
    }

    async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const {nome, cartaz, autor, encenador, actores, cenografia, figurinos, desenhoDeLuz, sala, edificio, cidade, estreia} = formData
    

    const Data = {
        nome,
        cartaz,
        autor,
        encenador,
        actores,
        cenografia,
        figurinos,
        desenhoDeLuz,
        sala,
        edificio,
        cidade,
        estreia,
    }

    await api.post('espectaculos', Data)

    alert('Espectáculo criado!')

    history.push('/')
    }

    return (
        <div className="novoContainer">
            
            <form onSubmit= {handleSubmit} className="formularioCriar">

                <div className="valorRegisto">
                    <label>Nome:</label>
                    <input type="text" placeholder="Nome" name="nome" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Cartaz:</label>
                    <input type="text" placeholder="Cartaz" name="cartaz" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Autor:</label>
                    <input type="text" placeholder="Autor" name="autor" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Encenador:</label>
                    <input type="text" placeholder="Encenador" name="encenador" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Actores:</label>
                    <input type="text" placeholder="Actores" name="actores" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Cenografia:</label>
                    <input type="text" placeholder="Cenografia" name="cenografia" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Figurinos:</label>
                    <input type="text" placeholder="Figurinos" name="figurinos" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Desenho de Luz:</label>
                    <input type="text" placeholder="Desenho de Luz" name="desenhoDeLuz" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Sala:</label>
                    <input type="text" placeholder="Sala" name="sala" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Edificio:</label>
                    <input type="text" placeholder="Edificio" name="edificio" onChange={handleInputChange}/>
                </div>

                <div className="valorRegisto">
                    <label>Cidade:</label>
                    <input type="text" placeholder="Cidade" name="cidade" onChange={handleInputChange}/>
                </div>
                
                <div className="valorRegisto">
                    <label>Estreia:</label>
                    <input type="text" placeholder="Estreia" name ="estreia" onChange={handleInputChange}/>
                </div>

                <button type="submit" className="criar">Criar</button>
            </form>
        </div>
    )
}

export default Novo