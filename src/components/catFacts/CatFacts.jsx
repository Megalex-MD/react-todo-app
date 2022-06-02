import React, { useState } from 'react';
import axios from 'axios';

const CatFacts = () => {
  const [fact, setFact] = useState('')

  const getFact = async () => {
    await axios.get('https://catfact.ninja/fact').then(response => {
      setFact(response.data.fact)
      console.log(response.data.fact);
    })
  }

  return (
    <div className='mt-20 w-4/5 m-auto'>
      <div className='flex items-center justify-center '>
        <h2 className='text-xl'>In case you didn't know</h2>
        <button
          onClick={getFact}
          className='bg-green-800 text-white ml-3 px-3 py-2'
        >Click me</button>
      </div>
      {fact
        ? <p className='w-4/5 m-auto mt-3 flex items-center justify-center rounded-2xl bg-gray-800 p-5'> {fact}</p>
        : null
      }

    </div >
  );
};

export default CatFacts;