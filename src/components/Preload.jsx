import React from 'react'

const Preload = () => {
    return (
        <div className='overflow-hidden fixed top-0 left-0 right-0 bottom-0'>
            <div className='flex space-x-2 justify-center items-center bg-black h-screen dark:invert'>
                <span className='sr-only'>Loading...</span>
                <div className='md:h-8 h-5 w-5 md:w-8 bg-white rounded-full animate-bounce [animation-delay:-0.2s]'></div>
                <div className='md:h-8 h-5 w-5 md:w-8 bg-white rounded-full animate-bounce [animation-delay:-0.10s]'></div>
                <div className='md:h-8 h-5 w-5 md:w-8 bg-white rounded-full animate-bounce'></div>
            </div>
        </div>
    )
}

export default Preload