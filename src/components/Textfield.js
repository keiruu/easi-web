import React, { useState } from 'react'

export default function Textfield() {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)

    const getResult = async (text) => {
        // Fix: https://support.stripe.com/questions/how-to-fix-syntaxerror-unexpected-token-in-json-at-position-0
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: text })
        };
        var responseClone;
        setLoading(true)
        const response = await fetch('https://easi-backend.onrender.com/translate', requestOptions)
        .then(function (response) {
            setLoading(false)
            responseClone = response.clone(); // 2
            return response.json();
        })
        .then(function (data) {
            setLoading(false)
            console.log(data)
        }, function (rejectionReason) {
            setLoading(false)
            responseClone.text()
            .then(function (bodyText) {
                setResult(bodyText)
                console.log('Received the following instead of valid JSON:', bodyText);
            });
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('here')
        console.log(JSON.stringify({prompt: event.target.prompt.value}))
        console.log(getResult(event.target.prompt.value))
    }

    return (
        <div className='flex w-full my-20'>
            <form className='relative w-full' onSubmit={handleSubmit}>
                <textarea maxLength='300' id='prompt' name='prompt' placeholder='Enter text to be simplified' className='focus:outline-none p-8 bg-white border-2 border-light rounded-l-[30px] resize-none w-[50%] h-[60vh]'>
                </textarea>
                <input type='submit' value={loading ? 'Loading' : 'Simplify'} className='text-sm bottom-[13px] left-[40%] rounded-[10px] absolute cursor-pointer bg-accent border-2 border-accent px-4 py-3 text-white hover:text-accent hover:bg-transparent'/>
                <textarea value={result} readonly='yes' className='focus:outline-none p-8 bg-white border-2 border-light rounded-r-[30px] resize-none w-[50%] h-[60vh]'> </textarea>
            </form>
        </div>
    )
}
