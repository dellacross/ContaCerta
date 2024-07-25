import React, { useState } from 'react'
import './styles.css'

const Form = () => {

    const [currentStep, setCurrentStep] = useState(1)

    const handleSteps = (id) => {
        if((currentStep+id) >= 1 && (currentStep+id) <= 6) setCurrentStep(currentStep+id)
    }

    return (
        <div id="form-wrapper">
            <div id="container">
                <aside>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                </aside>
                <main>
                    <header>
                        <span className={`step ${currentStep === 1 ? 'active' : ''}`}>Categoria</span>
                        <span className={`step ${currentStep === 2 ? 'active' : ''}`}>Data</span>
                        <span className={`step ${currentStep === 3 ? 'active' : ''}`}>Descrição</span>
                        <span className={`step ${currentStep === 4 ? 'active' : ''}`}>Valor</span>
                        <span className={`step ${currentStep === 5 ? 'active' : ''}`}>Membros</span>
                        <span className={`step ${currentStep === 6 ? 'active' : ''}`}>Confirmação</span>
                    </header>
                    <div id="line-container">
                        <div 
                            id="line" 
                            style={{ transform: `translateX(${(currentStep - 1) * 100}%)` }}    
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Form