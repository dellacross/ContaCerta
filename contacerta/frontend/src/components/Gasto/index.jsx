import React, { useState, useContext } from 'react'
import './styles.css'
import { AuthContext } from '../../context/provider'

const Gasto = (props) => {

    const { handleAddGasto } = useContext(AuthContext)
    const [tipo, setTipo] = useState(null)
    const [data, setData] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [valor, setValor] = useState(null)
    const [forma, setForma] = useState(null)
    const [pagante, setPagante] = useState(null)

    const handleClick = () => {
        if(tipo && data && descricao && valor && forma && pagante) {
            let gasto = {
                tipo: tipo, 
                data: data,
                descricao: descricao,
                valor: valor,
                forma: forma,
                pagante: pagante
            }
            handleAddGasto(gasto)
        }
    }

    return (
        <div id="gasto-wrapper">
            <main>
                <header>
                    <span>Adicionar Gasto</span>
                    <button onClick={() => props.setOpen(false)}><ion-icon name="close-circle-outline"></ion-icon></button>
                </header>
                <form action="">
                    <label htmlFor="">
                        <span>TIPO</span>
                        <input 
                            type="text" 
                            placeholder="Tipo"
                            onChange={(e) => setTipo(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        <span>DATA</span>
                        <input 
                            type="date" 
                            placeholder="Data"
                            onChange={(e) => setData(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        <span>DESCRIÇÃO</span>
                        <input 
                            type="text" 
                            placeholder="Descrição"
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        <span>VALOR</span>
                        <input 
                            type="text" 
                            placeholder="Valor"
                            onChange={(e) => setValor(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        <span>FORMA</span>
                        <input 
                            type="text" 
                            placeholder="Forma"
                            onChange={(e) => setForma(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        <span>PAGANTE</span>
                        <input 
                            type="text" 
                            placeholder="Pagante"
                            onChange={(e) => setPagante(e.target.value)}
                            required
                        />
                    </label>
                    <button
                        onClick={handleClick}
                        disabled={
                            !tipo ||
                            !data ||
                            !descricao ||
                            !valor ||
                            !forma ||
                            !pagante
                        }
                    >
                        Adicionar
                    </button>
                </form>
            </main>
        </div>
  )
}

export default Gasto