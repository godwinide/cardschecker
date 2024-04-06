'use client'

import React, { useState } from 'react'
import styles from './styles.module.css'
import TypeOne from '../forms/TypeOne'
import TypeTwo from '../forms/TypeTwo'
import TypeThree from '../forms/TypeThree'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import TypeFour from '../forms/TypeFour'
import Modal from '../modal/Modal'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


const Verify = () => {
  const [cardType, setCardtype] = useState("Apple");
  const [showmodal, setShowmodal] = useState(false);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');



  const groupone = [
    "Apple",
    "Amazon",
    "Steam",
    "Ebay",
    "PlayStation",
    "Xbox",
    "RazerGold",
    "Google",
  ];

  const grouptwo = [
    "Sephora",
    "Macys",
    "Nordstorm",
    "Nike",
    "Target",
  ];

  const groupthree = [
    "MasterCard",
    "Vanilla",
    "Walmart",
    "Perfect",
    "VisaSlivery",
    "TTVisa"
  ]

  const groupfour = [
    "Amex"
  ]


  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <section className={`${styles.verifyWrap} py-4`}>
      <h1 className='text-xl text-center text-white font-bold sm:text-3xl'>Verify Now</h1>
      <div className={`container flex flex-col justify-between items-center py-10 sm:flex-row`}>
        <img src="/cardimg3.png" alt="" className='w-2/3 sm:w-1/3' />
        {/* form */}
        <div className='w-full sm:w-1/2 flex flex-col gap-4'>
          <select className='block w-full p-2 rounded-lg'
          onInput={(e)=> setCardtype(e.target.value) }
          >
            <option value="Apple">Apple Gift Card</option>
            <option value="Amazon">Amazon Gift Card</option>
            <option value="Steam">Steam Wallet Gift Card</option>
            <option value="Ebay">Ebay Gift Card</option>
            <option value="PlayStation">Play Station Card</option>
            <option value="Xbox">Xbox Card</option>
            <option value="RazerGold">Razer Gold</option>
            <option value="Google">Google Play Gift Card</option>
            <option value="Sephora">Sephora Gift Card</option>
            <option value="Macys">Macys Card</option>
            <option value="Nordstorm">Nordstorm Card</option>
            <option value="Nike">Nike Card</option>
            <option value="MasterCard">Master Card</option>
            <option value="Target">Target Card</option>
            <option value="Vanilla">Vanilla Card</option>
            <option value="Walmart">Walmart Visa Card</option>
            <option value="Perfect">Perfect Visa Card</option>
            <option value="VisaSlivery">Visa Slivery White Card</option>
            <option value="TTVisa">TT Visa Card</option>
            <option value="Amex">Amex Card</option>
          </select>
          <select className='block w-full p-2 rounded-lg'
          onInput={(e)=> setCurrency(e.target.value) }
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
          </select>

          
          <div className={`${groupone.includes(cardType) ? 'block' : 'hidden'}`}>
            <TypeOne currency={currency} 
              amount={amount}
              setAmount={setAmount}
              showmodal={showmodal} 
              setShowmodal={setShowmodal} 
              cardname={cardType}/>
          </div>

            <div className={`${grouptwo.includes(cardType) ? 'block' : 'hidden'}`}>
            <TypeTwo 
            currency={currency} 
            amount={amount}
            setAmount={setAmount}
            showmodal={showmodal} 
            setShowmodal={setShowmodal} 
            cardname={cardType}/>
          </div>

            <div className={`${groupthree.includes(cardType) ? 'block' : 'hidden'}`}>
            <TypeThree 
            currency={currency} 
            amount={amount}
            setAmount={setAmount}
            showmodal={showmodal} 
            setShowmodal={setShowmodal} 
            cardname={cardType}/>
          </div>

    
            <div className={`${groupfour.includes(cardType) ? 'block' : 'hidden'}`}>
            <TypeFour currency={currency} 
             amount={amount}
             setAmount={setAmount}
              showmodal={showmodal} 
              setShowmodal={setShowmodal} 
              cardname={cardType}/>
          </div>
        </div>
      </div>
      <Modal
            showmodal={showmodal}
            setShowmodal={(setShowmodal)}
            cardname={cardType}
            amount={amount}
        />
    </section>
    </AlertProvider>
  )
}

export default Verify