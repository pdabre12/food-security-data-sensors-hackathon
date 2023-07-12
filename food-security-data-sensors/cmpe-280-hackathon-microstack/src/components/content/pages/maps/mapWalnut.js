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
      position: { lat: 15.8949, lng: 120.2863 }
    },
    {
        name: "Davao Region",
        position: { lat: 7.3042, lng: 126.0893 }
      }, 
      {
        name: "Cotabato Province",
        position: { lat: 7.1083, lng: 125.0388 }
    }, 
    {
        name: "Mindanao",
        position: { lat: 8.4961, lng: 123.3034 }
        }, 
  ] 
  

  const mangos2 = [
    {
      name: "Vishakapatnam",
      position: { lat: 17.6868, lng: 83.2185 },
    },
    {
        name: "Tirupati",
        position: { lat: 13.6288, lng: 79.4192 },
      },   
  ] 

  const walnuts1 = [
    {
      name: "San Joaquin",
      position: { lat: 36.6240, lng: -120.1843 },
      production:100000,
      color:'blue'
    },
    {
        name: "Sacramento",
        position: { lat: 38.5816, lng: -121.4944 },
        production:100000,
        color:"blue"
      },   
      {
        name: "Los Angeles",
        position: { lat: 34.052235, lng: -118.243683 },
        production:40000,
        color:"yellow"
      },  
      {
        name: "San Diego",
        position: { lat: 32.715736, lng: -117.161087 },
        production:20000,
        color:"orange"
      },  
      {
        name: "Fresno",
        position: { lat: 36.748, lng: -119.771 },
        production:10000,
        color:"green"
      },  
  ] 



  const walnuts2 = [
    {
      name: "Kerman",
      position: { lat: 30.2839, lng: 57.0834 },
      production:50000,
      color:'blue'
    },
    {
        name: "Kermanshah",
        position: { lat: 34.3277, lng: 47.0778 },
        production:50000,
      color:'blue'
    },
    {
        name: "Hamedan",
        position: { lat: 34.7983, lng: 48.5148 },
        production:50000,
      color:'blue'
    },
    {
        name: "Lorestan",
        position: { lat: 33.5818, lng: 48.3988 },
        production:50000,
      color:'blue'
    },
    {
        name: "Kohgilouyeh-Boyerahmad",
        position: { lat: 30.7246, lng: 50.8456 },
        production:50000,
      color:'blue'
    },
    {
        name: "Khorasan Razavi",
        position: { lat: 35.1020, lng: 59.1042 },
        production:50000,
      color:'blue'
    },
    {
        name: "Bakhtiari",
        position: { lat: 32.1461, lng: 50.5136 },
        production:50000,
      color:'blue'
    },
    {
        name: "Eastern Azerbaijan",
        position: { lat: 38.4281, lng: 45.9071 },
        production:50000,
      color:'blue'
    },
    {
        name: "Western Azerbaijan",
        position: { lat: 37.7595, lng: 45.0000 },
        production:50000,
      color:'blue'
    },
    {
        name: "Markazi",
        position: { lat: 34.6962, lng: 49.6911 },
        production:50000,
      color:'blue'
    }       
  ] 
  

export default function Crops() {
    return (
    <div style={{padding:'20px', paddingLeft:'50px'}}>
        <h3><center>Speciality Crops - Walnut</center></h3><br />
        <SimpleMaps places={walnuts1} zoom="5.5" countryCode="US" place="California" description="USA – major areas are San Joaquin and 
Sacramento Valleys"></SimpleMaps>
        <br></br>
        <SimpleMaps places={walnuts2} place="Iran" countryCode="IR" description="Kerman, Kermanshah, Hamedan, Lorestan, 
Kohgilouyeh-Boyerahmad , Khorasan Razavi, 
Bakhtiari, Eastern and Western Azerbaijan and 
Markazi"></SimpleMaps>
    </div>)
}