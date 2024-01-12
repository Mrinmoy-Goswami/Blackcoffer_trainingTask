import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
// import Data from "../Data/filteredData";

import chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataContext } from "../Context/DataContext";
import axios from "axios";


const DoughnutChart = ({ saleData }) => {
  const { state, dispatch } = useContext(DataContext);

 
  const chartDataBar = {
    labels: saleData.map((item)=>item._source.month), // X Axis
    datasets: [
      {
        label: "Sales (Cr)",
        data: saleData.map((item)=>item._source.sale), //Y Axis
      },
    ],
  };

  const barOptions = {
    responsive: true,
    backgroundColor: ["#D9EDBF", "#FFB996", "#FFCF81", "#FDFFAB"],
    borderColor: "white",
    borderWidth: 1,
    maintainAspectRatio:false
  };

  return (

    <div className="w-full h-full ">

  <Doughnut className="m-3 p-5 flex flex-row" data={chartDataBar} options={barOptions}  />
  </div>
    )
};

export default DoughnutChart;
