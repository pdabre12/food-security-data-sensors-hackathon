import React from "react";
import SensorDataCattleHumidity from "./SensorDataCattleHumidity.js";
import SensorDataCattleTemperature from "./SensorDataCattleTemperature.js";
import SensorDataInternalSensorHumidity from "./SensorDataInternalSensorHumidity.js";
import SensorDataInternalSensorTemperature from "./SensorDataInternalSensorTemperature.js";


export default function SensorData() {
    return (
        <div>
            <SensorDataCattleHumidity />
            <br/>
            <SensorDataCattleTemperature />
            <br/>
            <SensorDataInternalSensorHumidity />
            <br/>
            <SensorDataInternalSensorTemperature />
        </div>
    )
}