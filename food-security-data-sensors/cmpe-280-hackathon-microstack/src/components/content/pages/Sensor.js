import React from "react";
import MultiRangeSlider from "./RangeSlider";
import { Chart } from "react-google-charts";
import {datagdp, datainflow, dataoutflow} from "./data/data";


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

class Sensor extends React.Component {

    constructor(props){
        super(props);
        this.country = "USA";
        this.minRange= 1970;
        this.maxRange= 2020;
        this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
        
        this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
        this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));

        this.onCountryChange = this.onCountryChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);


        for(let i=0; i<this.changedDataGdp.length; i++){
            this.changedDataGdp[i].splice(1,2);
        }
        for(let i=0; i<this.changedDataoutflow.length; i++){
            this.changedDataoutflow[i].splice(1,2);
        }
        for(let i=0; i<this.changedDatainflow.length; i++){
            this.changedDatainflow[i].splice(1,2);
        }


        this.state = {
            changedDataGdp: this.changedDataGdp,
            changedDataoutflow: this.changedDataoutflow,
            changedDatainflow: this.changedDatainflow,
        }


    }

    onCountryChange(event){
        this.country=event.target.value;
        this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
        this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
        this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));

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

            this.setState({
                changedDataGdp: this.changedDataGdp,
                changedDataoutflow: this.changedDataoutflow,
                changedDatainflow: this.changedDatainflow,
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

            this.setState({
                changedDataGdp: this.changedDataGdp,
                changedDataoutflow: this.changedDataoutflow,
                changedDatainflow: this.changedDatainflow,
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

            this.setState({
                changedDataGdp: this.changedDataGdp,
                changedDataoutflow: this.changedDataoutflow,
                changedDatainflow: this.changedDatainflow,
            });
        }

    }


    onRangeChange(min, max){
        this.rangeChangedDataGdp = JSON.parse(JSON.stringify(this.changedDataGdp));
        this.rangeChangedDataoutflow = JSON.parse(JSON.stringify(this.changedDataoutflow));
        this.rangeChangedDatainflow = JSON.parse(JSON.stringify(this.changedDatainflow));

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

            this.setState({
                changedDataGdp: this.rangeChangedDataGdp,
                changedDataoutflow: this.rangeChangedDataoutflow,
                changedDatainflow: this.rangeChangedDatainflow,
            });
        }

    }

    render() {
        const selectedOpt = this.props.location.state.selectedOpt ?1:this.props.location.state.selectedOpt;
        console.log("hiiii", selectedOpt);

        return (
            <div>
                <label for="country-choice">Select Country: </label>
                <select name="country-choices" id="country-choices"
                        onChange={(event) => {
                            this.onCountryChange(event);
                        }}>
                    <option value="USA" defaultChecked={true}> USA </option>
                    <option value="India"> India </option>
                    <option value="China"> China </option>
                    
                </select>

                <MultiRangeSlider
                    min={1970}
                    max={2021}
                    onChange={({ min, max }) => {
                        this.onRangeChange(min, max)
                    }}
                />

                {selectedOpt === 1 ? (
                    <div>
                    <Chart id ='gdp'
                           chartType="LineChart"
                           width="100%"
                           height="280px"
                           data={this.state.changedDataGdp}
                           options={optionsgdp}
                    /></div>
                ) : selectedOpt === 2 ? (
                    <div>
                    <Chart id ='gdp'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDataGdp}
                               options={optionsgdp}
                        />
                        <Chart id ='inflow'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDatainflow}
                               options={optionsinflow}
                        />
                    </div>

                ) : selectedOpt === 3 ? (
                    <div>
                    <Chart id ='gdp'
                    chartType="LineChart"
                    width="100%"
                    height="280px"
                    data={this.state.changedDataGdp}
                    options={optionsgdp}
                    />
                        <Chart id ='inflow'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDatainflow}
                               options={optionsinflow}
                    />
                    <Chart id ='outflow'
                    chartType="LineChart"
                    width="100%"
                    height="280px"
                    data={this.state.changedDataoutflow}
                    options={optionsoutflow}
                    />
                    </div>

                ) : (
                    <p>No conditions are true</p>
                )}

            </div>

        )
    }
}

export default Sensor;