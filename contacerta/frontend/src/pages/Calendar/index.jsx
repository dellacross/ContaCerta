import React, { useEffect, useState } from 'react'
import './styles.css'
import Wrapper from '../../parts/Wrapper'
import axios from 'axios'

const Calendar = () => {

    const [expenseCategories, setExpenseCategories] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:3333/listpaymentcategory')
        .then(response => setExpenseCategories(response.data || []))
        .catch(error => console.log(error))
    }, [])

    return (
        <Wrapper title="Calendário">
            <div id="calendar-wrapper">
                <header>
                {
                    expenseCategories && expenseCategories?.map(item => (
                        <button
                            key={item.id}
                        >
                            <span>{item.name}</span>
                        </button>
                    ))
                }
                </header>
                <main>
                    <header>
                        <span>Julho</span>
                        <div className="btns">
                            <button><ion-icon name="arrow-back-outline"></ion-icon></button>
                            <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                    </header>
                    <main>
                        <header>
                            <span>Domingo</span>
                            <span>Segunda-Feira</span>
                            <span>Terça-Feira</span>
                            <span>Quarta-Feira</span>
                            <span>Quinta-Feira</span>
                            <span>Sexta-Feira</span>
                            <span>Sábado</span>
                        </header>
                        <div id="days-wrapper">
                            <div className="day">30</div>
                            <div className="day">1</div>
                            <div className="day">2</div>
                            <div className="day">3</div>
                            <div className="day">4</div>
                            <div className="day">5</div>
                            <div className="day">6</div>
                            <div className="day">7</div>
                            <div className="day">8</div>
                            <div className="day">9</div>
                            <div className="day">10</div>
                            <div className="day">11</div>
                            <div className="day">12</div>
                            <div className="day">13</div>
                            <div className="day">14</div>
                            <div className="day">15</div>
                            <div className="day">16</div>
                            <div className="day">17</div>
                            <div className="day">18</div>
                            <div className="day">19</div>
                            <div className="day">20</div>
                            <div className="day">21</div>
                            <div className="day">22</div>
                            <div className="day">23</div>
                            <div className="day">24</div>
                            <div className="day">25</div>
                            <div className="day">26</div>
                            <div className="day">27</div>
                            <div className="day">28</div>
                            <div className="day">29</div>
                            <div className="day">30</div>
                            <div className="day">31</div>
                            <div className="day">1</div>
                            <div className="day">2</div>
                            <div className="day">3</div>
                        </div>
                    </main>
                </main>
                <aside>
                    <span>Gastos</span>
                    <main>
                        <div className="day-expenses">
                            <span>Hoje</span>
                            <div className="expenses health">
                                <h4>
                                    <span>Academia</span>
                                    <div className="categories">
                                        <span className="health"><ion-icon name="heart"></ion-icon></span>
                                        <span><ion-icon name="pin-outline"></ion-icon></span>
                                    </div>
                                </h4>
                                <span>R$ 000,00</span>
                            </div>
                        </div>
                        <div className="day-expenses">
                            <span>XX/XX/XXX</span>
                                <div className="expenses uber">
                                    <h4>
                                        <span>Uber</span>
                                        <div className="categories">
                                            <span className='uber'><ion-icon name="car-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 000,00</span>
                                </div>
                                <div className="expenses leisure">
                                    <h4>
                                        <span>Festa</span>
                                        <div className="categories">
                                            <span className='leisure'><ion-icon name="sparkles-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 000,00</span>
                                </div>
                                <div className="expenses food">
                                    <h4>
                                        <span>Padaria</span>
                                        <div className="categories">
                                            <span className='food'><ion-icon name="fast-food-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 00,00</span>
                                </div>
                                <div className="expenses home">
                                    <h4>
                                        <span>IPTU</span>
                                        <div className="categories">
                                            <span className='home'><ion-icon name="home-outline"></ion-icon></span>
                                            <span><ion-icon name="pin-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 000,00</span>
                                </div>
                                <div className="expenses market">
                                    <h4>
                                        <span>Supermercado</span>
                                        <div className="categories">
                                            <span className='market'><ion-icon name="cart-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 000,00</span>
                                </div>
                        </div>
                        <div className="day-expenses">
                            <span>XX/XX/XXX</span>
                                <div className="expenses others">
                                    <h4>
                                        <span>Doação</span>
                                        <div className="categories">
                                            <span className='others'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 00,00</span>
                                </div>
                                <div className="expenses gifts">
                                    <h4>
                                        <span>Presente Aniversário</span>
                                        <div className="categories">
                                            <span className='gifts'><ion-icon name="gift-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 00,00</span>
                                </div>
                                <div className="expenses study">
                                    <h4>
                                        <span>Curso Inglês</span>
                                        <div className="categories">
                                            <span className='study'><ion-icon name="library-outline"></ion-icon></span>
                                            <span><ion-icon name="pin-outline"></ion-icon></span>
                                        </div>
                                    </h4>
                                    <span>R$ 00,00</span>
                                </div>
                        </div>
                    </main>
                </aside>
            </div>
        </Wrapper>
    )
}

export default Calendar