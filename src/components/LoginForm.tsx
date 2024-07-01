"use client"
import React from 'react'
import { doSocialLogin } from '@/app/actions'
import { useState } from 'react'

const LoginForm = () => {

    const[showFullText, setShowFullText] = useState(false);

    const handleToggleText = ()=> {
setShowFullText(preShowFullText => !preShowFullText);
    }

    const toggleText  = () => {
        
    }

    const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repudiandae sequi  consectetur a, quos totam reprehenderit, qui placeat hic sapiente libero recusandae aliquam officia omnis eaque quasi eos magnam soluta similique provident! Repudiandae, iste!`
    const words = text.split(" ");
    const initialText = words.slice(0,20).join(' ');
    console.log(initialText, "initialtext..")
    const remainingText = words.slice(20).join(' ')
    return (
    <div className='flex flex-row m-8'>
        <div>
            <h1 className='text-white text-5xl mb-4'>Landing Page</h1>
            <p className='text-white w-96'>
                {showFullText ? text : `${initialText}...`}
            </p>
            <button onClick={handleToggleText} className='rounded-full text-black bg-white p-2 mt-5 hover:bg-gray-200 animate-bounce focus:animate-none hover:animate-none'>
                    {showFullText ? 'Show Less' : 'Read More'}
            </button>
        </div>
        <div className='bg-white p-6 rounded-md flex flex-col items-center ms-8 transform  transition hover:scale-105 duration-700 ease-in-out hover:rotate-6'>
            <h1 className='text-2xl mb-4'>Login Options</h1>
   <form action={doSocialLogin} className='flex flex-col items-center'>
    <button onClick={toggleText} className='bg-pink-400 text-white p-1 rounded-md m-1 text-lg justify-items-center items-center' type='submit' name = 'action' value='google'>
        sign in with google
    </button>
    Or
    <button className='bg-blue-400 text-white p-1 rounded-md m-1 text-lg' type='submit' name = 'action' value='github'>
        sign in with github
    </button>
   </form>
   </div>
   </div>
  )
}

export default LoginForm