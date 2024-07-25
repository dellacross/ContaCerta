import React from 'react'
import './styles.css'
import Expense from './Expense'

const Table = (props) => {
  return (
    <div id="expenses-wrapper">
        <header>
            <strong>Total gasto: R$ 0.000,00</strong>
            <div id="month-btns">
                <button><ion-icon name="chevron-back"></ion-icon></button>
                <span>Mês</span>
                <button><ion-icon name="chevron-forward"></ion-icon></button>
            </div>
            <button onClick={() => props.setOpenForm(true)}>Adicionar gasto</button>
        </header>
        <div id="table-wrapper">
            <header>
                <span>Categoria</span>
                <span>Data</span>
                <span className='description'>Descrição</span>
                <span>Valor</span>
                <span>Método</span>
                <span>Membro</span>
                <span></span>
            </header>
            <main>
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
                <Expense />
            </main>
        </div>
    </div>
  )
}

export default Table