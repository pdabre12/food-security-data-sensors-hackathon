import React from 'react'
import {Chart} from 'react-google-charts'
const Outflow = ({data}) => {

    const optionsoutflow = {
        title: "FDI Outflows",
    };
    
  return (
    <Chart id ='outflow'
    chartType="LineChart"
    width="100%"
    height="280px"
    data={data}
    options={optionsoutflow}
/>
  )
}

export default Outflow