import React, { useContext, useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
// import Data from "../Data/filteredData";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataContext } from "../Context/DataContext";
import axios from "axios";
// import DataComp from "../Data/fetchData";

const MyChart = ({ saleData }) => {
  const { state, dispatch } = useContext(DataContext);

 
  const chartDataBar = {
    labels: saleData.map((item)=>item._source.month), // X Axis
    datasets: [
      {
        label: "Sales",
        data: saleData.map((item)=>item._source.sale), //Y Axis
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
