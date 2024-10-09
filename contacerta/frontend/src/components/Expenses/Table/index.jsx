import React, { useContext } from 'react'
import './styles.css'
import Expense from './Expense'
import { ExpensePageContext } from '../../../pages/Expenses'

const Table = () => {

    const {
        openForm, 
        setOpenForm 
    } = useContext(ExpensePageContext)

    return (
        !openForm &&
        <div id="expenses-wrapper">
            <header>
                <section>
                    <strong>
                        <span><ion-icon name="arrow-up-outline"></ion-icon></span>
                        <span>R$ 0.000,00</span>
                    </strong>
                    <strong>
                        <span><ion-icon name="arrow-down-outline"></ion-icon></span>
                        <span>R$ 0.000,00</span>
                    </strong>
                </section>
                <div id="month-btns">
                    <button><ion-icon name="chevron-back"></ion-icon></button>
                    <span>Mês</span>
                    <button><ion-icon name="chevron-forward"></ion-icon></button>
                </div>
                <section>
                    <button onClick={() => setOpenForm(true)}>Adicionar</button>
                    <button><ion-icon name="settings-outline"></ion-icon></button>
                </section>
            </header>
            <div id="table-wrapper">
                <header>
                    <span>Categoria</span>
                    <span>Data</span>
                    <span className='description'>Descrição</span>
                    <span>Valor</span>
                    <span>Método</span>
                    <span>Grupo</span>
                    <span>Membro</span>
                    <span>Conta</span>
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