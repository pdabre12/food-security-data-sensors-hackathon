import React, { Component, Fragment } from 'react';
import { GoogleMap, LoadScript,Circle,Marker } from '@react-google-maps/api';
import {Card} from 'react-bootstrap';
import ReactCountryFlag from 'react-country-flag';

const mapContainerStyle = {
    height: "300px",
    width: "80%"
  }


class SimpleMaps extends Component {
  
  
  render() {
    return (
    <div style={{marginLeft:"4rem"}}>
      <center>
      
        <Card style={{width:"80%",textAlign:"left",marginBottom:"1rem"}}>
        <Card.Header as="h5">{this.props.place} <ReactCountryFlag
                className={"emojiFlag"}
                countryCode={this.props.countryCode}
                style={{
                    fontSize: '1.3em',
                    lineHeight: '2em',
                    float:'right'
                }}
                aria-label="United States"
            /></Card.Header>
        <Card.Body>
            <Card.Text>
            {this.props.description}
            </Card.Text>
        </Card.Body>
        </Card>
        <LoadScript
        googleMapsApiKey="AIzaSyCaR2W_KsJlRo59ohQJMo34-Wm1rxbAsp4"
      >
        <GoogleMap
        id="circle-example"
          mapContainerStyle={mapContainerStyle}
          center={this.props.places[0].position}
          zoom={this.props.zoom?parseInt(this.props.zoom):4}
        >
            {
                this.props.places.map(place=>{
                    return(
                      <Circle
                      center={place.position}
                      radius={place.production}
                      options={{
                        fillColor: `${place.color}`,
                        fillOpacity: 0.3,
                        strokeColor: "black",
                        strokeOpacity: 0.5,
                        strokeWeight: 2,
                      }}
                    />
                    )
            }
          )}
            

        </GoogleMap>
      </LoadScript>
        </center>
        
      </div>
    )
  }
}

export default SimpleMaps;