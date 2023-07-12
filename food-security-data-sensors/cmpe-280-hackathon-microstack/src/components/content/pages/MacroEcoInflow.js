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
const validItems = ["GDP Growth Rate","FDI Inflow","FDI Outflow"]


class MacroEcoInflow extends React.Component {

    constructor(props){
        super(props);
        this.country = "USA";
        this.minRange= 1970;
        this.maxRange= 2020;
        this.changedDataGdp = JSON.parse(JSON.stringify(datagdp));
        this.visibleItems = [];
        this.selectedYear = '';
        this.selectedIndex = '';
        this.annotationText = '';
        this.fr = localStorage.getItem("foodResearcher");
        this.annotations = [];


        this.changedDataoutflow = JSON.parse(JSON.stringify(dataoutflow));
        this.changedDatainflow = JSON.parse(JSON.stringify(datainflow));


        this.onCountryChange = this.onCountryChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.annotate = this.annotate.bind(this);
        this.annotationTextBox = this.annotationTextBox.bind(this);
        this.getPointToYear = this.getPointToYear.bind(this);
        this.handleSelect = this.handleSelect.bind(this);


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

    handleDrop = e => {
        e.stopPropagation();
        e.preventDefault();
        const droppedItem = this.props.location.state.selectedLink;
        console.log("selected itemmsmsmsmms", this.props.location.state.selectedLink)
        console.log("droppedItem", droppedItem);
        if (!this.state.visibleItems || !this.state.visibleItems.includes(droppedItem)) {
            this.setState(prevState => ({
                visibleItems: [...(prevState.visibleItems || []), droppedItem]
            }), () => {
                console.log("BYEEEEEE", this.state.visibleItems);
            });
        }
    }


    handleDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }



    annotate (e){
        e.preventDefault();
        console.log(this.state.selectedYear, this.state.selectedIndex, this.state.annotationText);
        let ans = [];


        ans.push(
            {
                year: this.state.selectedYear,
                annotation: this.state.annotationText
            }
        )
        console.log("AFTER ANS", ans);


        if (!this.state.annotations) {
            this.setState(prevState => ({
                annotations: [...(prevState.annotations || []), ans]
            }), () => {
                console.log("state annotation", this.state.annotations);
            });
        }
        localStorage.setItem("gdpAnnotations", JSON.stringify(ans));
        this.setState({selectedYear:null});
        console.log("state", this.state.annotations);
    }

    annotationTextBox () {
        return (
            <>
                <form onSubmit={this.annotate} style={{alignItems:'center', justifyContent:'center'}} >
                    Add Annotation to Year {this.state.selectedYear} :

                    <input type='text' onChange = {(e)=> {this.setState({annotationText:e.target.value})}}/>

                    <button type='submit'> Save</button>
                </form>
            </>)
    }


    handleSelect = (event) => {
        const chartWrapper = event.chartWrapper;
        if (chartWrapper && chartWrapper.getChart && chartWrapper.getDataTable) {
            const chart = chartWrapper.getChart();
            const dataTable = chartWrapper.getDataTable();
            const selection = chart.getSelection();
            console.log("index", selection[0].row);
            const year_index = selection[0].row;
            if (selection && selection.length > 0) {
                const year = dataTable.getValue(selection[0].row, 0); // Assuming the first column represents the year
                console.log("year", year); // Log the selected year to the console
                this.setState({
                    selectedYear: year,
                    selectedIndex: year_index
                })
            }
        }
    }

    async getPointToYear(point){
        console.log("point", point);
        this.setState({fr: localStorage.getItem("foodResearcher")});
        const year_index = point + 1
        const year= this.rangeChangedDataGdp.year[year_index][0]
        console.log(year_index, year);
        this.setState({
            selectedYear: year,
            selectedIndex: year_index
        })
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
        const selectedOpt = this.props.location.state.selectedOpt ?this.props.location.state.selectedOpt:1;
        console.log("hiiii", selectedOpt);
        console.log("visibleItems", this.state.visibleItems);
        console.log("this.state.selectedYear", this.state.selectedYear);

        return (
            <div>
                <label for="country-choice">Select Country: </label>
                <select name="country-choices" id="country-choices"
                        onChange={(event) => {
                            this.onCountryChange(event);
                        }}>
                    <option value="USA" defaultChecked={true}> USA </option>
                    <option value="India"> China </option>
                    <option value="China"> India </option>

                </select>

                <MultiRangeSlider
                    min={1970}
                    max={2021}
                    onChange={({ min, max }) => {
                        this.onRangeChange(min, max)
                    }}
                />

                <div className="drop-zone" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
                    Drag and drop items here
                </div>

                {console.log("this stste", this.state.visibleItems)}

                <div className="visible-items-list">
                    {
                        this.state.visibleItems && this.state.visibleItems.map(item => <span className="visible-item" onClick={() => {
                            const newVisibleItems = this.visibleItems.filter(x => x !== item)
                            //this.setState({visibleItems: newVisibleItems})

                            this.setState(prevState => ({
                                visibleItems: [...(prevState.visibleItems || []), newVisibleItems]
                            }), () => {
                                console.log("HIIIIII", this.state.visibleItems);
                            });
                        }}>{item}</span>)
                    }
                </div>

                {console.log("this stste", this.state.visibleItems)}

                {this.state.visibleItems && this.state.visibleItems.includes(validItems[0]) &&
                    <div>
                        <Chart id ='gdp'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDataGdp}
                               options={optionsgdp}
                        />
                        {/*<GdpAnnotation country={this.country} start={this.min} end={this.end} />*/}

                    </div>
                }
                <br />
                <br />
                {this.state.visibleItems && this.state.visibleItems.includes(validItems[1]) &&
                    <div>
                        <Chart id ='inflow'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDatainflow}
                               options={optionsinflow}
                        />
                    </div>
                }
                <br />
                <br />
                {this.state.visibleItems && this.state.visibleItems.includes(validItems[2]) &&
                    <div>

                        <Chart id ='outflow'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDataoutflow}
                               options={optionsoutflow}
                        />
                    </div>
                }



                        <Chart id ='inflow'
                               chartType="LineChart"
                               width="100%"
                               height="280px"
                               data={this.state.changedDatainflow}
                               options={optionsinflow}
                        />

                <br/>
                <p className="text-secondary" style={{display: 'inline-block'}}>
                    {
                        (this.state.selectedYear != null && this.annotationTextBox())
                    }
                </p>

            </div>

        )
    }
}

export default MacroEcoInflow;