import React from 'react'
import './styles.css'
import logo from '../../assets/images/logo-wo-background.png'

const Login = () => {
  return (
    <div id="login-wrapper">
        <div id="login-container">
            <img src={logo} alt="logo" />
            <h2>Login</h2>
            <section>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder='Email'
                    />
                    <label className='form-label' htmlFor="">Email</label>
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder='Senha'
                    />
                    <label className='form-label' htmlFor="">Senha</label>
                </div>
            </section>
            <button
                id="login-btn"
            >
                Entrar
            </button>
            <button
                id="forgot-pwd-btn"
            >
                Esqueci minha senha
            </button>
            <button id="signin-btn">Criar Conta</button>
        </div>
    </div>
  )
}

export default Login