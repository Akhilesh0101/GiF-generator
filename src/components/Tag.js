import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import useGif from './hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag=() =>{
    const [tag, setTag] =useState('')
    
    const {gif, loading, fetchData} = useGif(tag);
   
    function changeHandler(event){
        setTag(event.target.value)
    }
    return(
          <div className='w-1/2 flex flex-col items-center g-5 mt-[50px]
             bg-blue-500 rounded-lg border border-black'>
              <h1 className='mt-[15px] font-bold text-2xl underline uppercase mb-2'>Random {tag} Gif</h1>

               {
                loading? (<Spinner/>):( <img src={gif} width='450px'/>)
               }

               <input className='w-10/12 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 text-lg py-2 rounded-lg text-center mt-3 mb-[3px] 
               ' onChange={changeHandler}
               value={tag}/>
             
              <button onClick={() => fetchData(tag)}
              className='w-10/12 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 text-lg py-2 rounded-lg mt-[20px] mb-[20px] '>Generate</button>
          </div>
    )
}
export default Tag; 