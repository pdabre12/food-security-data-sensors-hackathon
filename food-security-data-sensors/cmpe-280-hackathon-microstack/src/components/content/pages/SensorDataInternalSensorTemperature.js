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
text:`Internal Sensor Temperature Data for 2023-03-07`    

},
    yaxis: [
        {
            title: {
                text: 'Internal Sensor Temperature'
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

class SensorDataInternalSensorTemperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            time:[]
        };
    }

    async componentDidMount() {
        
      
       
            const internalSensorTemperature = [];
            for (var key in csvFile.Internal_sensor_temperature) {
                internalSensorTemperature.push(csvFile.Internal_sensor_temperature[key])
               
            }
          
            this.setState({
                series: [
                    {
                        data: internalSensorTemperature
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

export default SensorDataInternalSensorTemperature;
