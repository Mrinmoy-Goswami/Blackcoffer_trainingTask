import { useState ,useEffect} from "react";
import axios from "axios";
import "./App.css";
import MyChart from "./Components/Chart";
import SideBar from "./Components/SideBar";
import Homepage from "./Pages/Homepage";

function App() {
  const [data,setData] = useState([]);

  // useEffect(()=>{
  //     async function fetchData(){
  //         await axios.get("http://localhost:4000/data").then((res)=>setData(res.data));

  //         data.filter((data)=>data.end_year!=="" && data.region!=="" &&
  //         data.city!=="" && data.country!==""&& data.start_year!=="" ).splice(1,50);
          
  //         data.sort((a,b)=>a.end_year - b.end_year);
          
  //     }
  //     fetchData();
  //   },[])
    // console.log(data)
  return (
    <div className="h-screen flex p-0 m-0  ">
      {/* <SideBar newData={data} /> */}
      <Homepage />
     
    </div>
  );
}

export default App;
