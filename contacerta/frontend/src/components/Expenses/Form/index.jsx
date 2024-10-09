import React, { useState, createContext } from 'react'
import './styles.css'
import Category from '../../../pages/Expenses/Category'
import Datas from '../../../pages/Expenses/Datas'

export const ExpenseFormContext = createContext()

const Form = () => {

    const [currentStep, setCurrentStep] = useState(1)

    //category
    const [category, setCategory] = useState(null)
    //datas
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [date, setDate] = useState(null)
    const [description, setDescription] = useState(null)
    const [value, setValue] = useState(null)
    const [fixedExpense, setFixedExpense] = useState(false)

    const handleSteps = (id) => {
        if((currentStep+id) >= 1 && (currentStep+id) <= 3) setCurrentStep(currentStep+id)
    }

    return (
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
                fixedExpense
            }}
        >            
            <div id="form-wrapper">
                <div id="container">
                    <aside>
                        <span className={currentStep === 1 ? 'current-step' : ''}>1</span>
                        <span className={currentStep === 2 ? 'current-step' : ''}>2</span>
                        <span className={currentStep === 3 ? 'current-step' : ''}>3</span>
                    </aside>
                    <main>
                        <header>
                            <span className={`step ${currentStep === 1 ? 'active' : ''}`}>Categoria</span>
                            <span className={`step ${currentStep === 2 ? 'active' : ''}`}>Dados</span>
                            <span className={`step ${currentStep === 3 ? 'active' : ''}`}>Confirmação</span>
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