import React, { useEffect, useState } from 'react'
import {Chart} from 'react-google-charts'
import {datagdp} from '../content/pages/data/data'

const Gdp = () => {
    const optionsgdp = {
        title: "GDP",
    };
    const [mydata,setdata] =useState()
    useEffect(()=>{
       let data =  JSON.parse(JSON.stringify(datagdp));
        setdata ( data)

    },[])

  return (
    <Chart id ='gdp'
                       chartType="LineChart"
                       width="100%"
                       height="280px"
                       data={mydata}
                       options={optionsgdp}
                />
  )
}

export default Gdp