import React from 'react'
import './styles.css'

const Copyright = () => {

  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  }

  return (
    <div id="copyright">
      &#169;&nbsp;{getCurrentYear()} Victor Della Croce Maltez
    </div>
  )
}

export default Copyright