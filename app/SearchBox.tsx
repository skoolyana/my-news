'use client'

import { useRouter } from 'next/navigation';
import React, { useState,FormEvent } from 'react'


function SearchBox() {


    const[input, setInput] = useState("");

    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if(!input)
        {
            return;
        }

        router.push(`/search?term=${input}`);


    };


  return (
    <form
    
    onSubmit={handleSearch}
    
    className='max-w-6xl mx-auto flex justify-between items-center px-5'>

        <input type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search KeyWords...' 
        className='w-full h-14 rounded-sm 
        placeholder-gray-400 outline-none text-gray-400
        bg-transparent dark:text-orange-400
        flex-1'></input>
        
        
        <button type='submit' disabled={!input}
        
        className="text-orange-400 disabled:text-gray-400"
        >

        Search


        </button>


    </form>
  )
}

export default SearchBox