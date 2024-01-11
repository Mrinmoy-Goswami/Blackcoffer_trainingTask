import React from 'react'

const DataCard = ({number,name,year}) => {
  return (
    <div className='w-full shadow-lg border-2 h-full m-3 flex flex-col items-center justify-center bg-white'>
      <h1 className='text-[3rem] font-serif font-bold  '>{number}</h1>
      <p className='text-xl font-serif'>{name}</p>
      <p className='text-xl font-serif'>{year}</p>
    </div>
  )
}

export default DataCard
