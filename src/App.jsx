import { useState ,useEffect} from "react";
import axios from "axios";
import "./App.css";
import MyChart from "./Components/Chart";
import SideBar from "./Components/SideBar";
import Homepage from "./Pages/Homepage";

function App() {
  const [data,setData] = useState([]);

 
  return (
    <div className="h-screen flex p-0 m-0  ">
      {/* <SideBar newData={data} /> */}
      <Homepage />
     
    </div>
  );
}

export default App;
