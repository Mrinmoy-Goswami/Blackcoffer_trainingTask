import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext';
// import newData from '../Data/filteredData';

const Filter = ({filterer,tag,newData}) => {
    const {state,dispatch} = useContext(DataContext);
    const filterData = newData.map((data)=>{
      for(let key in data){
        if(key == filterer){
          return data[key];
        }
      }
    })
   const handleData =async ()=>{
       await dispatch({
            type:'SET_X',
            payload:filterData.slice(1,10)
        });
       
        // console.log(state.xAxis)
        
    }
  return (
    <div className='w-full p-3 mt-5  transition ease-in-out  hover:text-white text font-semibold hover:-translate-y-1 hover:scale-100 hover:bg-emerald-400 duration-300 cursor-pointer '
    onClick={handleData}
    >
        <p>{tag}</p>
    </div>
  )
}

export default Filter
