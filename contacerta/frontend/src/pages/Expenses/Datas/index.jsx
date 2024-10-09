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
        paymentMethod,
        setValue,
        value
    } = useContext(ExpenseFormContext)

    return (
        currentStep === 2 &&
        <section id="datas">
            <div className="data">
                <p>Data</p>
                <input 
                    type="date" 
                    placeholder='Data'
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="data">
                <p>Descrição</p>
                <input 
                    type="text" 
                    placeholder='Descrição'
                    maxLength={25}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="data">
                <p>Valor</p>
                <input 
                    type="text" 
                    placeholder='Valor'
                    onChange={(e) => setValue(e.target.value)}
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
                    <button>Pix parcelado</button>
                </div>
                <div id="method-configs">
                    <section>
                        <p>Parcelas</p>
                        <input 
                            type="text" 
                            placeholder='Parcelas'
                        />
                    </section>
                    <section>
                        <p>Conta</p>
                        <select 
                            name="" 
                            id=""
                        >
                            
                        </select>
                    </section>
                    <section>
                        <p>Cartão</p>
                        <select 
                            name="" 
                            id=""
                        >
                            
                        </select>
                    </section>
                </div>
            </div>
            <div className="data membros">
                <section id='selected-list'>
                    <p>Selecionados</p>
                    <div className="selected-container">

                    </div>
                </section>
                <section id='groups'>
                    <p>Grupos</p>
                    <select 
                        name="" 
                        id=""
                    >

                    </select>
                </section>
                <section id='members'>
                    <p>Membros</p>
                    <select 
                        name="" 
                        id=""
                    >

                    </select>
                </section>
            </div>
        </section>
    )
}

export default Datas