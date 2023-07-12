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
text:'Internal Sensor Humidity  Data for 2023-03-07'    

},
    yaxis: [
        {
            title: {
                text: 'Internal Sensor Humidity'
            }
        },
       
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

class SensorDataInternalSensorHumidity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            time:[]
        };
    }

    async componentDidMount() {
        
      
       
            const internalSensorHumidity = [];
            for (var key in csvFile.Internal_sensor_humidity) {
                internalSensorHumidity.push(csvFile.Internal_sensor_humidity[key])
               
            }
          
            this.setState({
                series: [
                    {
                        data: internalSensorHumidity
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

export default SensorDataInternalSensorHumidity;
