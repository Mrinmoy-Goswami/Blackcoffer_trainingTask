import React, { useContext, useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
// import Data from "../Data/filteredData";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataContext } from "../Context/DataContext";
import axios from "axios";
// import DataComp from "../Data/fetchData";

const MyChart = ({ dataa }) => {
  const { state, dispatch } = useContext(DataContext);

  //  const [xData,setXData] = useState("");

  // console.log(state.xAxis,state.yAxis)
  const chartDataBar = {
    labels: ["January", "February", "March", "April", "May","June","July","August","September","October","November","December"], // X Axis
    datasets: [
      {
        label: "Sales",
        data: [12, 23, 24, 26, 56,59,50,60,100,102,105,130], //Y Axis
      },
    ],
  };

  const barOptions = {
    responsive: true,
    backgroundColor: ["#38E54D", "#9CFF2E", "#FDFF00", "#C5E898"],
    borderColor: "white",
    borderWidth: 1,
    maintainAspectRatio:false
  };

  return (

    <div className="bg-white w-full h-full">


  <Bar className="m-3 p-5 " width={"100%"} data={chartDataBar} options={barOptions} />
    </div>
  
    )
};

export default MyChart;
