import React from "react";
// import Data from "../Data/filteredData";
import Filter from "./Filter";

const SideBar = ({newData}) => {
  return (
    <div className="h-full w-1/5  p-4 ">
      <div className="fixed h-full w-1/5  p-4 border-r ">

      <h2 className=" font-bold my-5 text-xl ml-3">Choose filter  </h2>

      <Filter filterer={"end_year"} tag={"Year"} newData={newData}/>
      <Filter filterer={"country"} tag={"Country"}newData={newData} />
      <Filter filterer={"region"} tag={"Region"} newData={newData}/>
      <Filter filterer={"topic"} tag={"Topic"} newData={newData}/>
      <Filter filterer={"sector"} tag={"Sector"} newData={newData}/>
      <Filter filterer={"source"} tag={"Source"} newData={newData}/>
      </div>
    </div>
  );
};

export default SideBar;
