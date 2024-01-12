import React, { useEffect, useState } from 'react'
import DataCard from '../Components/DataCard'
import MyChart from '../Components/Chart'
import Piechart from '../Components/Piechart'
import axios from 'axios'

import DoughnutChart from '../Components/Doughnut'
import RadarChart from '../Components/RadarChart'

const Homepage = () => {
  const[Data,setData] = useState();
 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/elasticapi"
        );
        console.log(response.data)
        setData(response.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
       
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className=' w-screen h-screen  '>
    <div className='flex sm:flex-row flex-col w-full h-[250px] p-0 m-0'>
        <div className='sm:w-1/3 flex flex-row w-full'>

      <DataCard number={"$500"} name={"Revenue"} year={"2023 Q4"}/>
      {/* <DataCard/> */}

        </div>

        <div className='w-full shadow-xl mt-5'>
    <MyChart saleData={Data}/>
        </div>
    </div>
    <div className='w-full h-1/2 mt-5 shadow-lg'>
         <Piechart saleData={Data}/>
        
    </div>
    <div className='flex sm:flex-row flex-col items-center'>
      <div className='w-1/2 h-[20rem] shadow-xl'>

    <DoughnutChart saleData={Data}/>
      </div>
      <div className='w-1/2 h-[20rem] shadow-xl'>
<RadarChart saleData={Data}/>
      </div>
    </div>
    </div>
  )
}

export default Homepage
