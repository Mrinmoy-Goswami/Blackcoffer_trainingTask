import React, { useEffect, useState } from 'react'
import DataCard from '../Components/DataCard'
import MyChart from '../Components/Chart'
import Piechart from '../Components/Piechart'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChart from '../Components/Doughnut'
import RadarChart from '../Components/RadarChart'

const Homepage = () => {
  const[Data,setData] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://a2da2b56cc164c0ebd157ae4c2427bc9.us-central1.gcp.cloud.es.io',
          {
            query: {
              match_all: {},
            },
          },
          {
            auth: {
              username: 'mrinmoy',
              password: 'Mydata@999',
            },
          }
        );

        setData(response.data.hits.hits);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
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
    <MyChart/>
        </div>
    </div>
    <div className='w-full h-1/2 mt-5 shadow-lg'>
         <Piechart/>
        
    </div>
    <div className='flex sm:flex-row flex-col items-center'>
      <div className='w-1/2 h-[20rem] shadow-xl'>

    <DoughnutChart/>
      </div>
      <div className='w-1/2 h-[20rem] shadow-xl'>
<RadarChart/>
      </div>
    </div>
    </div>
  )
}

export default Homepage
