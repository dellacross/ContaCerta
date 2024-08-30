import React, { useContext, useEffect } from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { Context } from '../../context/provider';

const Aside = () => {

    const navigate = useNavigate()
    const { 
        user,
        menuItems
    } = useContext(Context)

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/")
    }

    useEffect(() => {console.log("mi", menuItems)}, [menuItems])

    return (
        <aside>
            <img 
                src={logo} 
                alt="logo" 
            />
            <main>
                <nav>
                {
                    menuItems && menuItems?.map(item => (
                        <button
                            key={item?.id}
                            onClick={() => navigate(`${item?.endpoint}`)}
                        >
                            {item?.pageName}
                        </button>
                    ))
                }
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