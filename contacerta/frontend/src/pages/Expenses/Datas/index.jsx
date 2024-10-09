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
        value,
        setFixedExpense,
        fixedExpense,
        setEstablishment,
        establishment,
        setExpenseType,
        expenseType
    } = useContext(ExpenseFormContext)

    return (
        currentStep === 2 &&
        <section id="datas">
            <div className="data expense-type">
                <button 
                    onClick={() => setExpenseType(1)}
                    className={expenseType === 1 ? 'positive' : ''}
                >
                    Entrada
                </button>
                <button 
                    onClick={() => setExpenseType(2)}
                    className={expenseType === 2 ? 'negative' : ''}
                >
                    Saída
                </button>
            </div>
            <div className="data input-datas">
                <section>
                    <p>Data</p>
                    <input 
                        type="date" 
                        placeholder='Data'
                        onChange={(e) => setDate(e.target.value)}
                    />
                </section>
                <section>
                    <p>Descrição</p>
                    <input 
                        type="text" 
                        placeholder='Descrição'
                        maxLength={25}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </section>
                <section>
                    <p>Estabelecimento</p>
                    <input 
                        type="text" 
                        placeholder='Estabelecimento'
                        maxLength={25}
                        onChange={(e) => setEstablishment(e.target.value)}
                    />
                </section>
                <section>
                    <p>Valor</p>
                    <input 
                        type="text" 
                        placeholder='Valor'
                        onChange={(e) => setValue(e.target.value)}
                    />
                </section>
                <section className="fixed-expense">
                    <input 
                        name='fixed-expense-dot'
                        id='fixed-expense-dot'
                        type="checkbox" 
                        onChange={(e) => setFixedExpense(e.target.checked)}
                    />
                    <span>
                        { fixedExpense && <div className="checked-dot" /> }
                    </span>
                    <label htmlFor='fixed-expense-dot'>Cobrança recorrente</label>
                </section>
            </div>
            <div className="data payment-method">
                <p>Forma de pagamento</p>
                <div id="methods">
                    <button 
                        onClick={() => setPaymentMethod(1)}
                        className={paymentMethod === 1 ? 'current-payment-method' : ''}
                    >
                        Crédito à vista
                    </button>
                    <button 
                        onClick={() => setPaymentMethod(2)}
                        className={paymentMethod === 2 ? 'current-payment-method' : ''}
                    >
                        Crédito parcelado
                    </button>
                    <button 
                        onClick={() => setPaymentMethod(3)}
                        className={paymentMethod === 3 ? 'current-payment-method' : ''}
                    >
                        Débito
                    </button>
                    <button 
                        onClick={() => setPaymentMethod(4)}
                        className={paymentMethod === 4 ? 'current-payment-method' : ''}
                    >
                        Dinheiro
                    </button>
                    <button 
                        onClick={() => setPaymentMethod(5)}
                        className={paymentMethod === 5 ? 'current-payment-method' : ''}
                    >
                        Pix
                    </button>
                    <button 
                        onClick={() => setPaymentMethod(6)}
                        className={paymentMethod === 6 ? 'current-payment-method' : ''}
                    >
                        Pix parcelado
                    </button>
                </div>
                <div id="method-configs">
                    <section>
                        <p>Parcelas</p>
                        <input 
                            type="number" 
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