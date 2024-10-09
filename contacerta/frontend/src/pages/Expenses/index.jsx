import React, { useState, createContext } from 'react'
import './styles.css'
import Wrapper from '../../parts/Wrapper'
import Table from '../../components/Expenses/Table'
import Form from '../../components/Expenses/Form'

export const ExpensePageContext = createContext()

const Expenses = () => {

    const [openForm, setOpenForm] = useState(false)

    return (
        <Wrapper title="Extrato">
            <ExpensePageContext.Provider 
                value={{ 
                    openForm, 
                    setOpenForm 
                }}
            >
                <Table />
                <Form />
            </ExpensePageContext.Provider>
        </Wrapper>
    )
}

export default Expenses