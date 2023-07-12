import React, { Component } from "react";
import Papa from 'papaparse'
import csvFile from '../pages/data/sensors/sensor.json';
import rawCsvFile from "../pages/data/sensors/raw.json"

import Chart from 'react-apexcharts'

const time = []
for (var key in rawCsvFile.Time) {
                console.log(key + ": " )
                time.push(rawCsvFile.Time[key])
}
const options = {
    chart: {
        type: 'spline'
    },
    title: {
text:'Cattle Humidity Sensor Data for 2023-03-07'    

},
    yaxis: [
        {
            title: {
                text: 'Cattle Humidity Data'
            }
        },
        // {
        //     title: {
        //         text: 'Production (Tones)'
        //     },
        //     opposite: true
        // }
    ],
    labels: time,
    xaxis: {
        type: 'time',
        
    },
    tooltip: {
        x: {
            format: "yyyy"
        }
    },
    colors: ['#151572', '#80031d']
}

class SesnsorDataCattleHumidity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            time:[]
        };
    }

    async componentDidMount() {
        
      
        console.log(rawCsvFile.Time)
       
            const cattleHumidity = [];
            console.log(csvFile.Cattle_humidity)
            for (var key in csvFile.Cattle_humidity) {
                console.log(key + ": " )
                cattleHumidity.push(csvFile.Cattle_humidity[key])
               
            }
          
            this.setState({
                series: [
                    {
                        name: "Area harvested (ha)",
                        data: cattleHumidity
                    },
                    // {
                    //     name: "Production (tones)",
                    //     data: production
                    // }
                ]
            })
    
        console.log(this.state.series)
    }

    render() {
        return (
            <Chart
                width={'1100px'}
                height={'250px'}
                options={options}
                series={this.state.series}
                type="line"
            />
        );
    }
}

export default SesnsorDataCattleHumidity;
