import React, { useState, useContext } from 'react'
import './styles.css'
import logo from '../../assets/images/logo-wo-background.png'
import Copyright from '../../components/Copyright'
import { registerUser } from '../../services/RegisterUserService'
import { Context } from '../../context/provider'

const Login = () => {

    const [flipped, setFlipped] = useState(false)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordRpt, setPasswordRpt] = useState(null)
    const [nickname, setNickname] = useState(null)
    const { 
        login
    } = useContext(Context)

    const handleFlip = () => {
        setName(null)
        setEmail(null)
        setPassword(null)
        setPasswordRpt(null)
        setFlipped(!flipped)
        setNickname(null)
    }

    const handleLogin = async () => {
        await login(email, password);
    }

    const handleRegister = async () => {
        const response = await registerUser(name, email, password, nickname)

        if(response?.data?.status === 200) {
            setFlipped(true)
            setName(null)
            setEmail(null)
            setPassword(null)
            setPasswordRpt(null)
            setNickname(null)
        }
    }

    return (
        <div id="login-wrapper">
            <div 
                id="login-container"
                className={flipped ? 'flipped' : ''}
            >
                {
                    !flipped &&
                    <div className="login">
                        <img 
                            src={logo} 
                            alt="logo" 
                        />
                        <h2>Login</h2>
                        <section>
                            <div className="form-group">
                                <input 
                                    defaultValue={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text" 
                                    placeholder='Email'
                                />
                                <label 
                                    className='form-label' 
                                    htmlFor=""
                                >
                                    Email
                                </label>
                            </div>
                            <div className="form-group">
                                <input 
                                    defaultValue={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" 
                                    placeholder='Senha'
                                />
                                <label className='form-label' htmlFor="">Senha</label>
                            </div>
                        </section>
                        <button
                            id="login-btn"
                            onClick={handleLogin}
                        >
                            Entrar
                        </button>
                        <button
                            id="forgot-pwd-btn"
                        >
                            Esqueci minha senha
                        </button>
                        <button 
                            id="signin-btn"
                            onClick={handleFlip}
                        >
                            Criar Conta
                        </button>
                    </div>
                }
                {
                    flipped &&
                    <div className="signin">
                        <img 
                            src={logo} 
                            alt="logo" 
                        />
                        <h2>Registrar</h2>
                        <section>
                            <div className="form-group">
                                <input 
                                    defaultValue={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text" 
                                    placeholder='Nome'
                                />
                                <label className='form-label' htmlFor="">Nome</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    defaultValue={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    type="text" 
                                    placeholder='Usuário'
                                />
                                <label className='form-label' htmlFor="">Usuário</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    defaultValue={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text" 
                                    placeholder='Email'
                                />
                                <label className='form-label' htmlFor="">Email</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    defaultValue={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" 
                                    placeholder='Senha'
                                />
                                <label className='form-label' htmlFor="">Senha</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    defaultValue={passwordRpt}
                                    onChange={(e) => setPasswordRpt(e.target.value)}
                                    type="password" 
                                    placeholder='Repita a Senha'
                                />
                                <label className='form-label' htmlFor="">Repita a Senha</label>
                            </div>
                        </section>
                        <button
                            id="login-btn"
                            onClick={handleRegister}
                        >
                            Registrar
                        </button>
                        <button 
                            id="signin-btn"
                            onClick={handleFlip}
                        >
                            Já tem uma conta? Faça login
                        </button>
                    </div>
                }
            </div>
            <Copyright />
        </div>
    )
}

export default Login