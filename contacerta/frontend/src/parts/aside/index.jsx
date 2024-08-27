import React, { useContext } from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { Context } from '../../context/provider';

const Aside = () => {

    const navigate = useNavigate()
    const { user } = useContext(Context)

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <aside>
            <img 
                src={logo} 
                alt="logo" 
            />
            <main>
                <nav>
                    <button onClick={() => navigate("/calendar")}>
                        <ion-icon name="calendar"></ion-icon>
                        <span>Calendário</span>
                    </button>
                    <button onClick={() => navigate("/dashboard")}>
                        <ion-icon name="grid"></ion-icon>
                        <span>Dashboard</span>
                    </button>
                    <button onClick={() => navigate("/expenses")}>
                        <ion-icon name="bar-chart"></ion-icon>
                        <span>Extrato</span>
                    </button>
                </nav>
                <footer>
                    <button onClick={() => navigate("/profile")}>
                        <ion-icon name="person"></ion-icon>
                        <span>
                            <strong>{user?.nickname}</strong>
                            <p>Perfil</p>
                        </span>
                    </button>
                    <button onClick={() => navigate("/aboutus")}><ion-icon name="information-circle"></ion-icon></button>
                    <button onClick={() => navigate("/configs")}><ion-icon name="cog"></ion-icon></button>
                    <button onClick={handleLogout}><ion-icon name="log-out"></ion-icon></button>
                </footer>
            </main>
        </aside>
  )
}

export default Aside