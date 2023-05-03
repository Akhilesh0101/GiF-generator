import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import useGif from './hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random=() =>{
   
    const {gif, loading, fetchData} = useGif();
   
    return(
          <div className='w-1/2 flex flex-col items-center g-5 mt-[50px]
             bg-green-500 rounded-lg border border-black'>
              <h1 className='mt-[15px] font-bold text-2xl underline mb-2 uppercase'>A Random Gif</h1>

               {
                loading? (<Spinner/>):( <img src={gif} width='450px'/>)
               }
             
              <button onClick={ () => fetchData()}
              className='w-10/12 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-lg py-2 rounded-lg mt-[20px] mb-[20px] '>Generate</button>
          </div>
    )
}
export default Random;