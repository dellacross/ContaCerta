import React, { useState, createContext, useContext } from 'react'
import './styles.css'
import Category from '../../../pages/Expenses/Category'
import Datas from '../../../pages/Expenses/Datas'
import { ExpensePageContext } from '../../../pages/Expenses'

export const ExpenseFormContext = createContext()

const Form = () => {

    const {
        openForm, 
        setOpenForm 
    } = useContext(ExpensePageContext)

    const [currentStep, setCurrentStep] = useState(1)

    //category
    const [category, setCategory] = useState(null)
    //datas
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [date, setDate] = useState(null)
    const [description, setDescription] = useState(null)
    const [value, setValue] = useState(null)
    const [fixedExpense, setFixedExpense] = useState(false)
    const [establishment, setEstablishment] = useState(null)
    const [expenseType, setExpenseType] = useState(null)

    const handleSteps = (id) => {
        if((currentStep+id) >= 1 && (currentStep+id) <= 3) setCurrentStep(currentStep+id)
    }

    return (
        openForm &&
        <ExpenseFormContext.Provider 
            value={{ 
                currentStep, 
                setCurrentStep,
                setCategory,
                category,
                setPaymentMethod,
                paymentMethod,
                setDate,
                date,
                setDescription,
                description,
                setValue,
                value,
                setFixedExpense,
                fixedExpense,
                setEstablishment,
                establishment,
                setExpenseType,
                expenseType
            }}
        >            
            <div id="form-wrapper">
                <div id="container">
                    <main>
                        <header>
                            <span className={`step ${currentStep === 1 ? 'active' : ''}`}>Categoria</span>
                            <span className={`step ${currentStep === 2 ? 'active' : ''}`}>Dados</span>
                            <span className={`step ${currentStep === 3 ? 'active' : ''}`}>Confirmação</span>
                            <button onClick={() => setOpenForm(false)}>Fechar</button>
                        </header>
                        <div id="line-container">
                            <div 
                                id="line" 
                                style={{ transform: `translateX(${(currentStep - 1) * 100}%)` }}    
                            />
                        </div>
                        <article>
                            <Category />
                            <Datas />
                        </article>
                        <footer>
                            <button 
                                onClick={() => handleSteps(-1)}
                                disabled={currentStep === 1}
                                className='return-btn'
                            >
                                Voltar
                            </button>
                            <button onClick={() => handleSteps(1)}>Próximo</button>
                        </footer>
                    </main>
                </div>
            </div>
        </ExpenseFormContext.Provider>
    )
}

export default Form