import React, { Component } from "react";
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
text:'Cattle Temperature Sensor Data for 2023-03-07'    

},
    yaxis: [
        {
            title: {
                text: 'Cattle Temperature Data'
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

class SensorDataCattleTemperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            time:[]
        };
    }

    async componentDidMount() {
        
      
        console.log(rawCsvFile.Time)
       
            const cattleTemperature = [];
            for (var key in csvFile.Cattle_temperature) {
                cattleTemperature.push(csvFile.Cattle_temperature[key])
               
            }
          
            this.setState({
                series: [
                    {
                        data: cattleTemperature
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

export default SensorDataCattleTemperature;
