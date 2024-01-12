import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import Data from "../Data/filteredData";

import chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataContext } from "../Context/DataContext";
import axios from "axios";


const Piechart = ({ saleData}) => {
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
    backgroundColor: ["#7071E8", "#29ADB2", "#0766AD", "#C5E898"],
    borderColor: "white",
    borderWidth: 1,
    maintainAspectRatio:false
  };

  return (

    <div className="w-full h-full flex flex-row">

  <Line className="m-3 p-5 flex flex-row" data={chartDataBar} options={barOptions}  />
  </div>
    )
};

export default Piechart;
