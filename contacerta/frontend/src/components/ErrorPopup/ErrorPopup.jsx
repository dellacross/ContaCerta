import React, { useContext } from 'react'
import './ErrorPopup.css'
import { Context } from '../../context/provider'

const ErrorPopup = () => {

    const { error } = useContext(Context)

    return (
        <div id="error-popup">
            <span><ion-icon name="alert-circle"></ion-icon></span>
            <p>{error}</p>
        </div>
    )
}

export default ErrorPopup