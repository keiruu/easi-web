import React, { useState, CSSProperties } from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Textfield() {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState('0')
    const [disable, setDisable] = useState(false)

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

    const handleChange = (event) => {
        setCounter(event.target.value.length)
        if(event.target.value.length > 300){
            setDisable(true)
        } else {
            setDisable(false)
        }
    }

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        padding: "1rem"
      };

    return (
        <div className='flex w-full my-20'>
            <form className='relative w-full flex gap-8 lg:flex-row flex-col' onSubmit={handleSubmit}>
                <p className={`absolute left-0 top-[52vh] lg:left-0 lg:bottom-0 p-5 ${disable ? 'text-[#CD444C]' : 'text-light'}`}>{counter}/300</p>
                
                <textarea onCopy={handleChange} onPaste={handleChange} onCut={handleChange} onChange={handleChange} maxLength='500' id='prompt' name='prompt' placeholder='Enter text to be simplified' 
                    className='focus:outline-none p-8 bg-white border-2 border-light rounded-[20px] resize-none w-full lg:w-[50%] h-[60vh]'>
                </textarea>

                {/* <input type='submit' value={loading ? {} : 'Simplify'} disabled={disable} 
                    
                /> */}
                <button type='submit' 
                    className={`${disable ? 'bg-light border-light cursor-not-allowed' : 'bg-accent border-accent cursor-pointer hover:text-accent hover:bg-transparent'} 
                    transition-all w-[100px] text-sm top-[52vh] lg:bottom-[13px] right-2 lg:left-[23.5vw] xl:left-[25.6vw] rounded-[10px] absolute border-2 px-5 py-3 text-white
                    ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                >
                    {loading ? (
                        <PulseLoader
                            color="#FFFFFF"
                            loading={loading}
                            size={5}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : 'Simplify'}
                </button>
                <textarea value={result} readonly='yes' className='bg-[#F6F6F8] focus:outline-none p-8 bg-white border-2 border-light rounded-[20px] resize-none w-full lg:w-[50%] h-[60vh]'> </textarea>
                <button type='button' onClick={() => {
                    navigator.clipboard.writeText(result)
                    toast("📋 Copied text to clipboard")
                    }} 
                    className='absolute right-0 bottom-0 text-light text-2xl p-5 hover:text-accent transition-all'>
                    <FontAwesomeIcon icon={faCopy}/>
                </button>
            </form>
            <ToastContainer 
             position='bottom-right'
             theme='colored'
            />
        </div>
    )
}
