import React, { useState } from 'react'
import Papa from "papaparse"
import { useEffect } from 'react';
const csv_parser = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchCsvData = async () => {
          try{
        let response
          await fetch('/manu.csv').then((resp,err)=>{
            console.log("here is how the file is read",resp)
            response=resp
          });
          
          const csvData = await response.text();
          Papa.parse(csvData, {
            complete: (result) => {
              setData(result.data);
              console.log("Here is the data", result, result.data )
        },
          });
        }
        catch(e){
            console.log("There is a problem",e)
        }
        };

        fetchCsvData();
        
      }, []);
 
  return (
    <div>Done</div>
  )
}

export default csv_parser