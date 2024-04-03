import React from 'react'
import styles from './styles.module.css'

const Button = ({onClick, title, loading}) => {
  return (
    loading
    ?<button className={`${styles.loadingButton} w-full bg-green-600 text-white p-2 rounded-lg font-bold`}>
        <img src='/spinner.png'/>
    </button>
    :<button onClick={onClick} className='w-full bg-green-600 text-white p-2 rounded-lg font-bold'>{title}</button>
  )
}

export default Button