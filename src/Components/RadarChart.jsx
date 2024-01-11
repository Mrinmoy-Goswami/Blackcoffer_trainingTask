import React, { useContext, useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
// import Data from "../Data/filteredData";

import chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataContext } from "../Context/DataContext";
import axios from "axios";


const RadarChart = ({ dataa }) => {
  const { state, dispatch } = useContext(DataContext);

 
  const chartDataBar = {
    labels: ["January", "February", "March", "April", "May","June","July","August","September","October","November","December"], // X Axis
    datasets: [
      {
        label: "Sales (Cr)",
        data: [12, 23, 24, 26, 56,59,50,60,100,102,105,130], //Y Axis
      },
    ],
  };

  const barOptions = {
    responsive: true,
    backgroundColor: ["#7071E8", "#29ADB2", "#0766AD", "#C5E898"],
    borderColor: "white",
    borderWidth: 1,
    maintainAspectRatio:false
  };

  return (

    <div className="w-full h-full ">

  <Radar className="m-3 p-5 flex flex-row" data={chartDataBar} options={barOptions}  />
  </div>
    )
};

export default RadarChart;
