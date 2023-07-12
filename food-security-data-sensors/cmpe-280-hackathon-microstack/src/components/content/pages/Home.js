import React from "react";
import MultiRangeSlider from "./RangeSlider";
import { Chart } from "react-google-charts";
import Papa from 'papaparse';
import GDPdata from './data/microeconomic/GDP Growth Rage - API_NY.GDP.MKTP.KD.ZG_DS2_en_csv_v2_5347641.csv'
import {
    dataagriculture, datadebt,
    datafertilizers,
    datafertilizersprod,
    datagdp,
    datainflow,
    dataoutflow,
    datareserve, dataservice
} from "./data/data";



console.log(datagdp);

export const optionsgdp = {
    title: "GDP",
};

export const optionsoutflow = {
    title: "FDI Outflows",
};

export const optionsinflow = {
    title: "FDI Inflows",
};


export const optionsagriculture = {
    title: "Contribution of Agriculture",
};

export const optionsfertilizers = {
    title: "Fertilizers",
};

export const optionsfertilizersprod= {
    title: "Fertilizers PROD",
};

export const optionsreserve= {
    title: "Total Reserve",
};

export const optionsservice= {
    title: "Total Service",
};

export const optionsdebt= {
    title: "Total Debt",
};


class Home extends React.Component {

    constructor(){
        super();
        this.country = "USA";
        this.minRange= 1970;
        this.maxRange= 2021;
        this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
        this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
        this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));
        this.changedDataagriculture = JSON.parse(JSON.stringify(dataagriculture));
        this.changedDatafertilizers = JSON.parse(JSON.stringify(datafertilizers));
        this.changedDatafertilizersprod = JSON.parse(JSON.stringify(datafertilizersprod));
        this.changedDatareserve = JSON.parse(JSON.stringify(datareserve));
        this.changedDataservice = JSON.parse(JSON.stringify(dataservice));
        this.changedDatadebt = JSON.parse(JSON.stringify(datadebt));

        this.onCountryChange = this.onCountryChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);

        this.state = {
            changedDataGdp: this.changedDataGdp,
            changedDataoutflow: this.changedDataoutflow,
            changedDatainflow: this.changedDatainflow,
            changedDataagriculture: this.changedDataagriculture,
            changedDatafertilizers: this.changedDatafertilizers,
            changedDatafertilizersprod: this.changedDatafertilizersprod,
            changedDatareserve: this.changedDatareserve,
            changedDataservice: this.changedDataservice,
            changedDatadebt: this.changedDatadebt
        }
    }

    componentDidMount() {
        console.log("In this component");
        // fetch('./test.csv')
        //     .then(response => response.text())
        //     .then(data => {
        //         console.log("the data", data);
        //         // Parse the CSV data using Papa Parse
        //         const parsedData = Papa.parse(data);
        //         console.log("parse data", parsedData);
        //     });

    }

    onCountryChange(event){
        this.country=event.target.value;
        this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
        this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
        this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));
        this.changedDataagriculture = JSON.parse(JSON.stringify(dataagriculture));
        this.changedDatafertilizers = JSON.parse(JSON.stringify(datafertilizers));
        this.changedDatafertilizersprod = JSON.parse(JSON.stringify(datafertilizersprod));
        this.changedDatareserve = JSON.parse(JSON.stringify(datareserve));
        this.changedDataservice = JSON.parse(JSON.stringify(dataservice));
        this.changedDatadebt = JSON.parse(JSON.stringify(datadebt));
        if(this.country === "India"){
            for(let i=0; i<this.changedDataGdp.length; i++){
                this.changedDataGdp[i].splice(2,2);
            }
            for(let i=0; i<this.changedDataoutflow.length; i++){
                this.changedDataoutflow[i].splice(2,2);
            }
            for(let i=0; i<this.changedDatainflow.length; i++){
                this.changedDatainflow[i].splice(2,2);
            }
            for(let i=0; i<this.changedDataagriculture.length; i++){
                this.changedDataagriculture[i].splice(2,2);
            }
            for(let i=0; i<this.changedDatafertilizers.length; i++){
                this.changedDatafertilizers[i].splice(2,2);
            }
            for(let i=0; i<this.changedDatafertilizersprod.length; i++){
                this.changedDatafertilizersprod[i].splice(2,2);
            }
            for(let i=0; i<this.changedDatareserve.length; i++){
                this.changedDatareserve[i].splice(2,2);
            }
            for(let i=0; i<this.changedDataservice.length; i++){
                this.changedDataservice[i].splice(2,2);
            }
            for(let i=0; i<this.changedDatadebt.length; i++){
                this.changedDatadebt[i].splice(2,2);
            }
            this.setState({
                changedDataGdp: this.changedDataGdp,
                changedDataoutflow: this.changedDataoutflow,
                changedDatainflow: this.changedDatainflow,
                changedDataagriculture: this.changedDataagriculture,
                changedDatafertilizers: this.changedDatafertilizers,
                changedDatafertilizersprod: this.changedDatafertilizersprod,
                changedDatareserve: this.changedDatareserve,
                changedDataservice: this.changedDataservice,
                changedDatadebt: this.changedDatadebt
            });


        } else if(this.country === "China") {
            for(let i=0; i<this.changedDataGdp.length; i++){
                this.changedDataGdp[i].splice(1,1);
                this.changedDataGdp[i].pop();
            }
            for(let i=0; i<this.changedDataoutflow.length; i++){
                this.changedDataoutflow[i].splice(1,1);
                this.changedDataoutflow[i].pop();
            }
            for(let i=0; i<this.changedDatainflow.length; i++){
                this.changedDatainflow[i].splice(1,1);
                this.changedDatainflow[i].pop();
            }
            for(let i=0; i<this.changedDataagriculture.length; i++){
                this.changedDataagriculture[i].splice(1,1);
                this.changedDataagriculture[i].pop();
            }
            for(let i=0; i<this.changedDatafertilizers.length; i++){
                this.changedDatafertilizers[i].splice(1,1);
                this.changedDatafertilizers[i].pop();
            }
            for(let i=0; i<this.changedDatafertilizersprod.length; i++){
                this.changedDatafertilizersprod[i].splice(1,1);
                this.changedDatafertilizersprod[i].pop();
            }
            for(let i=0; i<this.changedDatareserve.length; i++){
                this.changedDatareserve[i].splice(1,1);
                this.changedDatareserve[i].pop();
            }
            for(let i=0; i<this.changedDataservice.length; i++){
                this.changedDataservice[i].splice(1,1);
                this.changedDataservice[i].pop();
            }
            for(let i=0; i<this.changedDatadebt.length; i++){
                this.changedDatadebt[i].splice(1,1);
                this.changedDatadebt[i].pop();
            }
            this.setState({
                changedDataGdp: this.changedDataGdp,
                changedDataoutflow: this.changedDataoutflow,
                changedDatainflow: this.changedDatainflow,
                changedDataagriculture: this.changedDataagriculture,
                changedDatafertilizers: this.changedDatafertilizers,
                changedDatafertilizersprod: this.changedDatafertilizersprod,
                changedDatareserve: this.changedDatareserve,
                changedDataservice: this.changedDataservice,
                changedDatadebt: this.changedDatadebt
            });
        } else if(this.country === "USA") {
            for(let i=0; i<this.changedDataGdp.length; i++){
                this.changedDataGdp[i].splice(1,2);
            }
            for(let i=0; i<this.changedDataoutflow.length; i++){
                this.changedDataoutflow[i].splice(1,2);
            }
            for(let i=0; i<this.changedDatainflow.length; i++){
                this.changedDatainflow[i].splice(1,2);
            }
            for(let i=0; i<this.changedDataagriculture.length; i++){
                this.changedDataagriculture[i].splice(1,2);
            }
            for(let i=0; i<this.changedDatafertilizers.length; i++){
                this.changedDatafertilizers[i].splice(1,2);
            }
            for(let i=0; i<this.changedDatafertilizersprod.length; i++){
                this.changedDatafertilizersprod[i].splice(1,2);
            }
            for(let i=0; i<this.changedDatareserve.length; i++){
                this.changedDatareserve[i].splice(1,2);
            }
            for(let i=0; i<this.changedDataservice.length; i++){
                this.changedDataservice[i].splice(1,2);
            }
            for(let i=0; i<this.changedDatadebt.length; i++){
                this.changedDatadebt[i].splice(1,2);
            }
            this.setState({
                changedDataGdp: this.changedDataGdp,
                changedDataoutflow: this.changedDataoutflow,
                changedDatainflow: this.changedDatainflow,
                changedDataagriculture: this.changedDataagriculture,
                changedDatafertilizers: this.changedDatafertilizers,
                changedDatafertilizersprod: this.changedDatafertilizersprod,
                changedDatareserve: this.changedDatareserve,
                changedDataservice: this.changedDataservice,
                changedDatadebt: this.changedDatadebt
            });
        }

    }


    onRangeChange(min, max){
        this.rangeChangedDataGdp = JSON.parse(JSON.stringify(this.changedDataGdp));
        this.rangeChangedDataoutflow = JSON.parse(JSON.stringify(this.changedDataoutflow));
        this.rangeChangedDatainflow = JSON.parse(JSON.stringify(this.changedDatainflow));
        this.rangeChangedDataagriculture = JSON.parse(JSON.stringify(this.changedDataagriculture));
        this.rangeChangedDatafertilizers = JSON.parse(JSON.stringify(this.changedDatafertilizers));
        this.rangeChangedDatafertilizersprod = JSON.parse(JSON.stringify(this.changedDatafertilizersprod));
        this.rangeChangedDatareserve = JSON.parse(JSON.stringify(this.changedDatareserve));
        this.rangeChangedDataservice = JSON.parse(JSON.stringify(this.changedDataservice));
        this.rangeChangedDatadebt = JSON.parse(JSON.stringify(this.changedDatadebt));

        if(min != 1970 || max !=2020){
            for(let i=1; i<this.rangeChangedDataGdp.length; i++){
                if(this.rangeChangedDataGdp[i][0] === min) {
                    this.rangeChangedDataGdp.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDataGdp.splice(i,this.rangeChangedDataGdp.length - 1);
                }
            }

            for(let i=1; i<this.rangeChangedDataoutflow.length; i++){
                if(this.rangeChangedDataoutflow[i][0] === min) {
                    this.rangeChangedDataoutflow.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDataoutflow.splice(i,this.rangeChangedDataGdp.length - 1);
                }
            }

            for(let i=1; i<this.rangeChangedDatainflow.length; i++){
                if(this.rangeChangedDatainflow[i][0] === min) {
                    this.rangeChangedDatainflow.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDatainflow.splice(i,this.rangeChangedDatainflow.length - 1);
                }
            }

            for(let i=1; i<this.rangeChangedDataagriculture.length; i++){
                if(this.rangeChangedDataagriculture[i][0] === min) {
                    this.rangeChangedDataagriculture.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDataagriculture.splice(i,this.rangeChangedDataagriculture.length - 1);
                }
            }

            for(let i=1; i<this.rangeChangedDatafertilizers.length; i++){
                if(this.rangeChangedDatafertilizers[i][0] === min) {
                    this.rangeChangedDatafertilizers.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDatafertilizers.splice(i,this.rangeChangedDatafertilizers.length - 1);
                }
            }

            for(let i=1; i<this.rangeChangedDatafertilizersprod.length; i++){
                if(this.rangeChangedDatafertilizersprod[i][0] === min) {
                    this.rangeChangedDatafertilizersprod.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDatafertilizersprod.splice(i,this.rangeChangedDatafertilizersprod.length - 1);
                }
            }

            for(let i=1; i<this.rangeChangedDatareserve.length; i++){
                if(this.rangeChangedDatareserve[i][0] === min) {
                    this.rangeChangedDatareserve.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDatareserve.splice(i,this.rangeChangedDatareserve.length - 1);
                }
            }
            for(let i=1; i<this.rangeChangedDataservice.length; i++){
                if(this.rangeChangedDataservice[i][0] === min) {
                    this.rangeChangedDataservice.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDataservice.splice(i,this.rangeChangedDataservice.length - 1);
                }
            }
            for(let i=1; i<this.rangeChangedDatadebt.length; i++){
                if(this.rangeChangedDatadebt[i][0] === min) {
                    this.rangeChangedDatadebt.splice(1, i);
                }
                if(this.rangeChangedDataoutflow[i] !== undefined && this.rangeChangedDataoutflow[i][0] === max) {
                    this.rangeChangedDatadebt.splice(i,this.rangeChangedDatadebt.length - 1);
                }
            }

            this.setState({
                changedDataGdp: this.rangeChangedDataGdp,
                changedDataoutflow: this.rangeChangedDataoutflow,
                changedDatainflow: this.rangeChangedDatainflow,
                changedDataagriculture: this.rangeChangedDataagriculture,
                changedDatafertilizers: this.rangeChangedDatafertilizers,
                changedDatafertilizersprod: this.rangeChangedDatafertilizersprod,
                changedDatareserve: this.rangeChangedDatareserve,
                changedDataservice: this.rangeChangedDataservice,
                changedDatadebt: this.rangeChangedDatadebt
            });
        }

    }

    render() {

        return (
            <div>
                <label for="country-choice">Select Country: </label>
                <select name="country-choices" id="country-choices"
                        onChange={(event) => {
                            this.onCountryChange(event);
                        }}>
                    <option value="USA"> USA </option>
                    <option value="India"> China </option>
                    <option value="China"> India </option>
                </select>

                <MultiRangeSlider
                    min={1970}
                    max={2020}
                    onChange={({ min, max }) => {
                        this.onRangeChange(min, max)
                    }}
                />
                <Chart id ='gdp'
                       chartType="LineChart"
                       width="100%"
                       height="280px"
                       data={this.state.changedDataGdp}
                       options={optionsgdp}
                />
                <Chart id ='outflow'
                       chartType="LineChart"
                       width="100%"
                       height="280px"
                       data={this.state.changedDataoutflow}
                       options={optionsoutflow}
                />
                <Chart id ='inflow'
                       chartType="LineChart"
                       width="100%"
                       height="280px"
                       data={this.state.changedDatainflow}
                       options={optionsinflow}
                />
               
            </div>

        )
    }
}

export default Home;