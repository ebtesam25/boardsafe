import React, {Component} from "react";
import {Link} from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import axios from 'axios';
import anime from 'animejs';
import ReactAnime from 'react-animejs';
//import assets
import LogoImg from '../../../assets/images/logo.png';
import PlaneImg from '../../../assets/images/plane.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const {Anime, stagger} = ReactAnime

var i = 0;
var j = 0;
var seat =[];
var seatchart = [];
var coords = [];
for(i=0;i<17;i++){
    for(j=0;j<6;j++){
        var str = "A"
        var row = 14+i;
        if(row <33){
        seat.push(row+String.fromCharCode(str.charCodeAt(0)+j));
        if(j<3){
        coords.push([410-(15*(i+1)),206+(10*j),404-(15*(i+1)),212+(10*j)]);
        }
        else if(j>=3){
            coords.push([410-(15*(i+1)),210+(10*j),404-(15*(i+1)),216+(10*j)]);
        }
    }
    else if(row>33){
        seat.push(row+String.fromCharCode(str.charCodeAt(0)+j));
        if(j<3){
        coords.push([402-(15*(i)),206+(10*j),408-(15*(i)),212+(10*j)]);
        }
        else if(j>=3){
            coords.push([402-(15*(i)),210+(10*j),408-(15*(i)),216+(10*j)]);
        }
    }
        
        //console.log(seat);
        

    }
}
//console.log(seat);
var firstclass = ['1A', '1E', '2B', '2F', '3A', '3E', '4B', '4F'];
var six = ['29A', '29F', '29B', '29E', '29C', '29D', '28A', '28F', '28B', '28E', '28C', '28D', '27A', '27F', '27B', '27E', '27C', '27D'];
var five = ['26A', '26F', '26B', '26E', '26C', '25A', '25F', '25B', '25E', '25D', '24A', '24F', '24B', '24E', '24C', '23A', '23F', '23B', '23E', '23D'];
var four = ['22A', '22B', '22C', '22D', '22F', '21A', '21C', '21D', '21E', '21F', '20A', '20B', '20C', '20D', '20F', '19A', '19C', '19D', '19E', '19F'];
var three = ['18A', '18B', '18C', '18D', '18F', '17A', '17C', '17D', '17E', '17F', '16A', '16B', '16C', '16D', '16F', '15A', '15C', '15D', '15E', '15F'];
var two = ['14A', '14F', '14B', '14E', '13A', '13F', '13B', '13E', '12A', '12F', '12B', '12E', '11A', '11F', '11B', '11E'];
var individuals1 = ['5A', '7A', '9A', '11A', '13A'];
var individual2 =['5F', '7F', '9F', '11F', '13F'];
var individual3 =['6A', '8A', '10A', '12A'];
var individual4 =['6F', '8F', '10F', '12F'];
var individual5 =['5C', '7C', '9C', '11C', '13C'];
var individual6 =['5D', '7D', '9D', '11D', '13D'];
var individual7 =['6C', '8C', '10C', '12C'];
var individual8 =['6D', '8D', '10D', '12D'];


var planestats = [29, 4 ,0, 8, 4, 4 ,4 ,3, 0.5];
   
    
    

var MAP = {
    name: "my-map",
    areas: [
        //First Class
      { name: "1A", shape: "rect", coords: [630,200,620,210], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "1B", shape: "rect", coords: [630,215,620,225], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "1E", shape: "rect", coords: [630,245,620,255], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "1F", shape: "rect", coords: [630,260,620,270], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "2A", shape: "rect", coords: [610,200,600,210], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "2B", shape: "rect", coords: [610,215,600,225], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "2E", shape: "rect", coords: [610,245,600,255], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "2F", shape: "rect", coords: [610,260,600,270], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "3A", shape: "rect", coords: [590,200,580,210], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "3B", shape: "rect", coords: [590,215,580,225], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "3E", shape: "rect", coords: [590,245,580,255], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "3F", shape: "rect", coords: [590,260,580,270], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "4A", shape: "rect", coords: [570,200,560,210], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "4B", shape: "rect", coords: [570,215,560,225], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "4E", shape: "rect", coords: [570,245,560,255], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "4F", shape: "rect", coords: [570,260,560,270], preFillColor: "transparent", fillColor: "#99D9E2"  },
        //Economy Plus
      { name: "5A", shape: "rect", coords: [530,206,524,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "5B", shape: "rect", coords: [530,216,524,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "5C", shape: "rect", coords: [530,226,524,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "5D", shape: "rect", coords: [530,240,524,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "5E", shape: "rect", coords: [530,250,524,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "5F", shape: "rect", coords: [530,260,524,266], preFillColor: "transparent", fillColor: "#99D9E2"  },
      
      { name: "6A", shape: "rect", coords: [515,206,509,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "6B", shape: "rect", coords: [515,216,509,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "6C", shape: "rect", coords: [515,226,509,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "6D", shape: "rect", coords: [515,240,509,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "6E", shape: "rect", coords: [515,250,509,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "6F", shape: "rect", coords: [515,260,509,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "7A", shape: "rect", coords: [500,206,494,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7B", shape: "rect", coords: [500,216,494,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7C", shape: "rect", coords: [500,226,494,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7D", shape: "rect", coords: [500,240,494,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7E", shape: "rect", coords: [500,250,494,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7F", shape: "rect", coords: [500,260,494,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "8A", shape: "rect", coords: [485,206,479,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8B", shape: "rect", coords: [485,216,479,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8C", shape: "rect", coords: [485,226,479,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8D", shape: "rect", coords: [485,240,479,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8E", shape: "rect", coords: [485,250,479,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8F", shape: "rect", coords: [485,260,479,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "9A", shape: "rect", coords: [470,206,464,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "9B", shape: "rect", coords: [470,216,464,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "9C", shape: "rect", coords: [470,226,464,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "9D", shape: "rect", coords: [470,240,464,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "9E", shape: "rect", coords: [470,250,464,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "9F", shape: "rect", coords: [470,260,464,266], preFillColor: "transparent", fillColor: "#99D9E2"  },
     
      { name: "10A", shape: "rect", coords: [455,206,449,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10B", shape: "rect", coords: [455,216,449,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10C", shape: "rect", coords: [455,226,449,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10D", shape: "rect", coords: [455,240,449,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10E", shape: "rect", coords: [455,250,449,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10F", shape: "rect", coords: [455,260,449,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "11A", shape: "rect", coords: [440,206,434,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11B", shape: "rect", coords: [440,216,434,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11C", shape: "rect", coords: [440,226,434,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11D", shape: "rect", coords: [440,240,434,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11E", shape: "rect", coords: [440,250,434,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11F", shape: "rect", coords: [440,260,434,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "12A", shape: "rect", coords: [425,206,419,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12B", shape: "rect", coords: [425,216,419,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12C", shape: "rect", coords: [425,226,419,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12D", shape: "rect", coords: [425,240,419,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12E", shape: "rect", coords: [425,250,419,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12F", shape: "rect", coords: [425,260,419,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "13A", shape: "rect", coords: [410,206,404,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "13B", shape: "rect", coords: [410,216,404,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "13C", shape: "rect", coords: [410,226,404,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "13D", shape: "rect", coords: [410,240,404,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "13E", shape: "rect", coords: [410,250,404,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "13F", shape: "rect", coords: [410,260,404,266], preFillColor: "transparent", fillColor: "#99D9E2"  },
     
    ]
  }
 

  var k = 0;
 
    for(k=0;k<96;k++){

           // console.log(k);

            MAP.areas[69+k] = { name: seat[k], shape: "rect", coords: coords[k], preFillColor: "transparent", fillColor: "#99D9E2"  };
           // console.log(MAP.areas[69+k+1]);

    }

   

class Boarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
    msg: '',
    firstclass: ['1A', '1E', '2B', '2F', '3A', '3E', '4B', '4F'],
    seatchart: []
  };
  
  } 
 

 /* animation (){
      anime({
    targets: '.passenger',
    rotate:45,
    translateY: 200,
    borderRadius: 50,
    duration: 3000,
    easing: 'linear',
    direction: 'alternate'
  });
}*/


 

componentDidMount(){
    
 
    for(i=0;i<10;i++){
            for(j=0;j<165;j++){
                if(firstclass[i]==MAP.areas[j].name){
                    
                  console.log("Boarding...");
                  
                  console.log(firstclass[i]);
                  MAP.areas[j].preFillColor = "red";
                 
                }
                
            
          }
        }
        
        for(i=0;i<25;i++){
            for(j=0;j<165;j++){
            if(six[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(six[i]);
                MAP.areas[j].preFillColor = "orange";
               
              }
            }
            
        
      }
        for(i=0;i<25;i++){
            for(j=0;j<165;j++){
            if(five[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(five[i]);
                MAP.areas[j].preFillColor = "yellow";
               
              }
            }
            
        
      }
      for(i=0;i<25;i++){
        for(j=0;j<165;j++){
        if(four[i]==MAP.areas[j].name){
            
            console.log("Boarding...");
           
            console.log(four[i]);
            MAP.areas[j].preFillColor = "pink";
           
          }
        }
    }

        for(i=0;i<25;i++){
            for(j=0;j<165;j++){
            if(three[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(three[i]);
                MAP.areas[j].preFillColor = "blue";
               
              }
            }
        }
        for(i=0;i<25;i++){
            for(j=0;j<165;j++){
            if(two[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(two[i]);
                MAP.areas[j].preFillColor = "#00FB00";
               
              }
            }
        }
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                
            if(individuals1[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(individuals1[i]);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        }   
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                console.log(individual2[i]);
            if(individual2[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
               
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        } 
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                
            if(individual3[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        }
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                
            if(individual4[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        } 
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                
            if(individual5[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        }
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
               
            if(individual6[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
               
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        }
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                
            if(individual7[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
                
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        }
        for(i=0;i<25;i++){
            
            for(j=0;j<165;j++){
                
            if(individual8[i]==MAP.areas[j].name){
                
                console.log("Boarding...");
               
                console.log(MAP.areas[j].name);
                MAP.areas[j].preFillColor = "cyan";
               
              }
            }
           
        }
    
 

  }
  
  clicked(area) {
		this.setState({
			msg: `Seat ${area.name}`
        });
        
	}
  
    render() {
        
        return (
         <div >
            
               {/*} <Anime
                    initial={[
                        {
                            targets: '.passenger',
                             translateY: 150,
                            borderRadius: 50,
                            duration: 1000,
                            easing: 'linear',
                         },
                         {
                            targets: '.passenger',
                             translateX: -70,
                            borderRadius: 50,
                            duration: 1000,
                            easing: 'linear',
                         },
                         
                    ]}
                    >
                    </Anime>*/}
  
            <div style={{float: "left", margin:"auto", backgroundColor:"#EFF1F3", height:"20vh", width:"100%"}}>
              <div style={{float: "left", marginLeft:"4vw", marginTop:"10px"}}><img src={LogoImg} alt="logo" width="50%"/></div>
              
              <div style={{float: "right",fontFamily:"Avenir", fontSize:"7vh",marginRight:"4vw",marginTop:"10px"}}>Boarding Status</div>
              <div style={{fontFamily:"Aileron", textAlign:"center", width:"60%", color:"red"}}>Total Rows: 29
                    First Class: 4
                    Economy: 25 
                    Family/Disabled/Special :0
                    General Economy: 25<br></br>
                    Rows w/ bags: 12
                    Groups of 6: 3
                    Groups of 5: 4
                    Groups of 4: 4
                    Groups of 3: 4
                    Groups of 2: 8</div>
            </div>
            <div style={{float: "left",backgroundColor:"#009FB7",display:"block", height:"80vh", width:"80%"}}>
                
              
                <div style={{ width:"75%",display:"block", margin:"auto", marginTop:"2%", color:"white"}}>

           
                    <ImageMapper src={PlaneImg} map={MAP} width={800}onClick={area => this.clicked(area)}/>
                    
                   <div style={{position:"absolute",zIndex:2,right:"37%",top:"57%",fontFamily:"Gilmer"}}>{this.state.msg}</div>
               </div>
               
            </div>
            
            <div style={{float:"right",width:"20%",backgroundColor:"#272727", height:"80vh",color:"white",overflow: "auto"}}>
            {this.state.firstclass.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%",color:"red"}} >{item}</p>
    ))}
    {six.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"orange"}}>{item}</p>
    ))}
    {five.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"yellow"}}>{item}</p>
    ))}
    {four.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"pink"}}>{item}</p>
    ))}
    {three.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"blue"}}>{item}</p>
    ))}
    {two.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"#00FB00"}}>{item}</p>
    ))}
    {individuals1.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual2.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual3.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual4.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual5.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual6.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual7.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    {individual8.map(item => (
        <p style={{fontFamily:"Avenir",textAlign:"center", marginLeft:"10%", color:"cyan"}}>{item}</p>
    ))}
    
               
            </div>
           
         </div>   
        );
    }
}

export default Boarding;