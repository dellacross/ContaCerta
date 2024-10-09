import React, { useContext } from 'react'
import './styles.css'
import { ExpenseFormContext } from '../../../components/Expenses/Form'

const Datas = () => {

    const {
        currentStep,
        setDescription,
        description,
        setDate,
        date,
        setPaymentMethod,
        paymentMethod
    } = useContext(ExpenseFormContext)

    return (
        currentStep === 2 &&
        <section id="datas">
            <div className="data">
                <p>Data</p>
                <input 
                    type="date" 
                    placeholder='Data'
                />
            </div>
            <div className="data">
                <p>Descrição</p>
                <input 
                    type="text" 
                    placeholder='Descrição'
                />
            </div>
            <div className="data">
                <p>Valor</p>
                <input 
                    type="text" 
                    placeholder='Valor'
                />
            </div>
            <div className="data payment-method">
                <p>Forma de pagamento</p>
                <div id="methods">
                    <button>Crédito à vista</button>
                    <button>Crédito parcelado</button>
                    <button>Débito</button>
                    <button>Dinheiro</button>
                    <button>Pix</button>
                </div>
            </div>
            <div className="data membros">
                <p>Selecionados</p>
                <div id="select-container">
                    <div className="selected-container">

                    </div>
                    <select 
                        name="" 
                        id=""
                    >

                    </select>
                    <select 
                        name="" 
                        id=""
                    >

                    </select>
                </div>
            </div>
        </section>
    )
}

export default Datas