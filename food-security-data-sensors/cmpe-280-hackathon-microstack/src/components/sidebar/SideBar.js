import React from "react";
import logo from "./logo2.png";
import SubMenu from "./SubMenu";
import CropSubmenu from "./CropSubmenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })} style={{"height" : "1200px","background":"#326264"}}>
        <div>
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#1c0707" }}
            className="mt-4"
          >

          </Button>
          <a href="/">
          <div class="Logo"><img src={logo} alt=" " width="100" height="100" /></div>
          </a>
          
        </div>

        <br />

        <Nav className="flex-column pt-2" style={{color:"#f8f8f8"}}>
          <CropSubmenu className="active"
            title="Macroeconomic (USD)"
            page="/MacroEco"
            links={{"GDP Growth Rate":'/MacroEco/Gdp',"FDI Inflow":'/MacroEco/Gdp',"FDI Outflow":'/MacroEco/Gdp'}}
                   ids = {["GDP Growth Rate","FDI Inflow","FDI Outflow"]}
            items={["GDP Growth Rate","FDI Inflow","FDI Outflow"]}
          />

          <br />
          <SubMenu
            title="Agriculture"
            page="/Agriculture"
            links={{"Agricultural contributions":1,"Fertilizer production":2,"Fertilizer consumption":3}}
            
            items={["Agricultural contributions","Fertilizer production","Fertilizer consumption"]}
          />
          <br />
          <SubMenu
            title="Debt Services"
            page="/Debt"
            links={{"Reserves":1,"Service":2,"Total Debt(%)":3}}
            
            items={["Reserves", "Service","Total Debt(%)"]}
          />


          <br />
          <CropSubmenu
            title="Crops"
            page="/Debt"
            links={{"Crops - Walnuts":"/crops-walnut/","Crops - Mangoes":"/crops-mango/"}}
            
            items={["Crops - Walnuts", "Crops - Mangoes"]}
          />
      
          <Nav.Item>
            <Nav.Link href="/import" style={{"background":"#326264"}}>
              Import
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/WalnutsIronYields" style={{"background":"#326264"}}>
              Yield
            </Nav.Link>
          </Nav.Item>
          <CropSubmenu
            title="Sensor Data"
            page="/sensor"
            links={{"Cattle Temperature":"/sensors/cattletemp/","Cattle Humidity":"/sensors/cattlehum/","Internal Temperature":"/sensors/inttemp/","Internal Humidity":"/sensors/inthum/"}}
            
            items={["Cattle Temperature","Cattle Humidity","Internal Temperature","Internal Humidity"]}
          />
        </Nav>
      </div>
    );
  }
}

export default SideBar;
