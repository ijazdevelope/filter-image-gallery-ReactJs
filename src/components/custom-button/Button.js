import React from 'react'
import style from './style.scss';

const Button = ({children, className, type}) => {
  return (
    <div>
        <button className={className} type={type} > {children} </button>
    </div>
  )
}

export default Button
