import React from "react";
import SimpleMaps from "./SimpleMaps";
const banana1 = [
    {
      name: "Guandong",
      position: { lat: 23.1317, lng: 113.2663 }
    },
    {
        name: "Guangxi",
        position: { lat: 22.8152, lng: 108.3275 }
      },   
      
    {
        name: "Yunnan",
        position: { lat: 25.0453, lng: 102.7097 }
      },   
      
    {
        name: "Hainan",
        position: { lat: 20.0200, lng: 110.3486 }
      },      
  ] 

  const banana2 = [
    {
      name: "Lampung",
      position: { lat: -5.450000, lng: 105.4068 }
    },
    {
        name: "East Java",
        position: { lat: -7.250445, lng: 112.768845 }
      },   
      
    {
        name: "West Java",
        position: { lat: -6.914744, lng: 107.6689 }
      },   
      
    {
        name: "Indonesian Papua",
        position: { lat: -4.466667, lng: 135.199997 }
      },      
  ] 

  const mangos1 = [
    {
      name: "Pangasinan in Luzon",
      position: { lat:  9.672948, lng: 123.873001 }
    },
    
  ] 
  

  const mangos2 = [
    {
      name: "Vishakapatnam",
      position: { lat: 17.6868, lng: 83.2185 },
      production:75000,
      color:"blue"
    },
    {
        name: "Tirupati",
        position: { lat: 13.6288, lng: 79.4192 },
        production:75000,
      color:"blue"
      },   
  ] 

  const walnuts1 = [
    {
      name: "San Joaquin",
      position: { lat: 36.6066, lng: 120.1890 }
    },
    {
        name: "Sacramento",
        position: { lat: 38.5816, lng: 121.4944 }
      },   
  ] 

  const walnuts2 = [
    {
      name: "Kerman",
      position: { lat: 30.2839, lng: 57.0834 }
    },
    {
        name: "Kermanshah",
        position: { lat: 34.3277, lng: 47.0778 }
    },
    {
        name: "Hamedan",
        position: { lat: 34.7983, lng: 48.5148 }
    },
    {
        name: "Lorestan",
        position: { lat: 33.5818, lng: 48.3988 }
    },
    {
        name: "Kohgilouyeh-Boyerahmad",
        position: { lat: 30.7246, lng: 50.8456 }
    },
    {
        name: "Khorasan Razavi",
        position: { lat: 35.1020, lng: 59.1042 }
    },
    {
        name: "Bakhtiari",
        position: { lat: 32.1461, lng: 50.5136 }
    },
    {
        name: "Eastern Azerbaijan",
        position: { lat: 38.4281, lng: 45.9071 }
    },
    {
        name: "Western Azerbaijan",
        position: { lat: 37.7595, lng: 45.0000 }
    },
    {
        name: "Markazi",
        position: { lat: 34.6962, lng: 49.6911 }
    }       
  ] 
  

export default function CropsMango() {
    return (
    <div style={{padding:'20px', paddingLeft:'50px'}}>
        <h3><center>Speciality Crops - Mango</center></h3><br />
        <SimpleMaps places={mangos1} countryCode="PH" zoom="6" place="Philippines" description="Philippines, the largest production areas are 
Pangasinan in Luzon, West and Central Visas, 
Davao Region, and Cotabato Province for 
Mindanao"></SimpleMaps>
        <br></br>
        <SimpleMaps places={mangos2} countryCode="IN" place="India" description="The major growing regions are 
Andhra Pradesh"></SimpleMaps>
    </div>)
}