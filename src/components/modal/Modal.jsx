import React from 'react'
import styles from './styles.module.css'

const Modal = ({cardname, amount, showmodal, setShowmodal}) => {
  return (
    showmodal ===  true &&
    <div className={styles.modelWrap} onClick={()=> setShowmodal(false)}>
      <div className={styles.content}>
      <h2 className='text-green-600 text-lg mb-3'>Success!</h2>
      <p>Your {cardname} card has been verified</p>
      <hr />
      <p className='my-2'>Brand: {cardname}</p>
      <p className='my-2'>Amount: {amount}</p>
      <p  className='my-2'>Status: Deactivated</p>
      <button
        onClick={()=>setShowmodal(false)}
        className='bg-blue-400 text-center text-white py-2 px-4 rounded-lg shadow-md my-4'
      >
        OK
      </button>
      </div>
    </div>
  )
}

export default Modal