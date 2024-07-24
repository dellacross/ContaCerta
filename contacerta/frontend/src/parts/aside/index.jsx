import React from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Aside = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <aside>
            <img 
                src={logo} 
                alt="logo" 
            />
            <main>
                <nav>
                    <button onClick={() => navigate("/dashboard")}>
                        <ion-icon name="grid"></ion-icon>
                        <span>Dashboard</span>
                    </button>
                    <button onClick={() => navigate("/calendar")}>
                        <ion-icon name="calendar"></ion-icon>
                        <span>Calendário</span>
                    </button>
                    <button>
                        <ion-icon name="analytics"></ion-icon>
                        <span>Análises</span>
                    </button>
                </nav>
                <footer>
                    <button onClick={() => navigate("/profile")}>
                        <ion-icon name="person"></ion-icon>
                        <span>
                            <strong>NomeUser</strong>
                            <p>Perfil</p>
                        </span>
                    </button>
                    <button><ion-icon name="information-circle"></ion-icon></button>
                    <button><ion-icon name="cog"></ion-icon></button>
                    <button onClick={handleLogout}><ion-icon name="log-out"></ion-icon></button>
                </footer>
            </main>
        </aside>
  )
}

export default Aside