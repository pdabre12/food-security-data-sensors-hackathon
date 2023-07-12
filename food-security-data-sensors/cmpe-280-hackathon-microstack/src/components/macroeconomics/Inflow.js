import React from 'react'
import {Chart} from 'react-google-charts'
const Inflow = ({data}) => {
    const optionsinflow = {
        title: "FDI Inflows",
    };

  return (
    <Chart id ='inflow'
    chartType="LineChart"
    width="100%"
    height="280px"
    data={data}
    options={optionsinflow}
/>
  )
}

export default Inflow