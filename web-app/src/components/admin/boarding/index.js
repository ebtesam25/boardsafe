import React, {Component} from "react";
import {Link} from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import axios from 'axios';
//import assets
import LogoImg from '../../../assets/images/logo.png';
import PlaneImg from '../../../assets/images/plane.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var i = 0;
var j = 0;
var seat =[];
var coords = [];
for(i=0;i<17;i++){
    for(j=0;j<6;j++){
        var str = "A"
        var row = 22+i;
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
        
        console.log(seat);
        

    }
}
//console.log(seat);


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
      { name: "7A", shape: "rect", coords: [530,206,524,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7B", shape: "rect", coords: [530,216,524,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7C", shape: "rect", coords: [530,226,524,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7D", shape: "rect", coords: [530,240,524,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7E", shape: "rect", coords: [530,250,524,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "7F", shape: "rect", coords: [530,260,524,266], preFillColor: "transparent", fillColor: "#99D9E2"  },
      
      { name: "8A", shape: "rect", coords: [515,206,509,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8B", shape: "rect", coords: [515,216,509,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8C", shape: "rect", coords: [515,226,509,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8D", shape: "rect", coords: [515,240,509,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8E", shape: "rect", coords: [515,250,509,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "8F", shape: "rect", coords: [515,260,509,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "10A", shape: "rect", coords: [500,206,494,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10B", shape: "rect", coords: [500,216,494,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10C", shape: "rect", coords: [500,226,494,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10D", shape: "rect", coords: [500,240,494,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10E", shape: "rect", coords: [500,250,494,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "10F", shape: "rect", coords: [500,260,494,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "11A", shape: "rect", coords: [485,206,479,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11B", shape: "rect", coords: [485,216,479,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11C", shape: "rect", coords: [485,226,479,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11D", shape: "rect", coords: [485,240,479,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11E", shape: "rect", coords: [485,250,479,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "11F", shape: "rect", coords: [485,260,479,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "12A", shape: "rect", coords: [470,206,464,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12B", shape: "rect", coords: [470,216,464,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12C", shape: "rect", coords: [470,226,464,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12D", shape: "rect", coords: [470,240,464,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12E", shape: "rect", coords: [470,250,464,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "12F", shape: "rect", coords: [470,260,464,266], preFillColor: "transparent", fillColor: "#99D9E2"  },
     
      { name: "14A", shape: "rect", coords: [455,206,449,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "14B", shape: "rect", coords: [455,216,449,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "14C", shape: "rect", coords: [455,226,449,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "14D", shape: "rect", coords: [455,240,449,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "14E", shape: "rect", coords: [455,250,449,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "14F", shape: "rect", coords: [455,260,449,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "15A", shape: "rect", coords: [440,206,434,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "15B", shape: "rect", coords: [440,216,434,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "15C", shape: "rect", coords: [440,226,434,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "15D", shape: "rect", coords: [440,240,434,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "15E", shape: "rect", coords: [440,250,434,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "15F", shape: "rect", coords: [440,260,434,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "20A", shape: "rect", coords: [425,206,419,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "20B", shape: "rect", coords: [425,216,419,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "20C", shape: "rect", coords: [425,226,419,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "20D", shape: "rect", coords: [425,240,419,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "20E", shape: "rect", coords: [425,250,419,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "20F", shape: "rect", coords: [425,260,419,266], preFillColor: "transparent", fillColor: "#99D9E2"  },

      { name: "21A", shape: "rect", coords: [410,206,404,212], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "21B", shape: "rect", coords: [410,216,404,222], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "21C", shape: "rect", coords: [410,226,404,232], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "21D", shape: "rect", coords: [410,240,404,246], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "21E", shape: "rect", coords: [410,250,404,256], preFillColor: "transparent", fillColor: "#99D9E2"  },
      { name: "21F", shape: "rect", coords: [410,260,404,266], preFillColor: "transparent", fillColor: "#99D9E2"  },
     
    ]
  }
  console.log(MAP.areas[69]);
  var k = 0;
 
    for(k=0;k<96;k++){

           // console.log(k);

            MAP.areas[69+k] = { name: seat[k], shape: "rect", coords: coords[k], preFillColor: "transparent", fillColor: "#99D9E2"  };
           // console.log(MAP.areas[69+k+1]);

    }

    let animation = anime({
        targets: 'div',
        translateX: 100,
        borderRadius: 50,
        duration: 2000,
        easing: 'linear',
        direction: 'alternate'
      });

  

class Boarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
    msg: '',
  };
  } 
  
  clicked(area) {
		this.setState({
			msg: `Seat ${area.name}`
		});
	}
  
    render() {
        
        return (
         <div >
            <div style={{float: "left", margin:"auto", backgroundColor:"#EFF1F3", height:"20vh", width:"100%"}}>
              <div style={{float: "left", marginLeft:"4vw", marginTop:"10px"}}><img src={LogoImg} alt="logo" width="50%"/></div>
              <div style={{float: "right",fontFamily:"Avenir", fontSize:"7vh",marginRight:"4vw",marginTop:"10px"}}>Boarding Status</div>
            </div>
            <div style={{float: "left",backgroundColor:"#009FB7",display:"block", height:"80vh", width:"80%"}}>
                
              
                <div style={{ width:"75%",display:"block", margin:"auto", marginTop:"2%", color:"white"}}>
                    
                    <ImageMapper src={PlaneImg} map={MAP} width={800}onClick={area => this.clicked(area)}/>
                   <div style={{position:"absolute",zIndex:2,right:"37%",top:"57%",fontFamily:"Gilmer"}}>{this.state.msg}</div>
               </div>
               
            </div>
            <div style={{float:"right",width:"20%",backgroundColor:"#272727", height:"80vh"}}></div>
         </div>   
        );
    }
}

export default Boarding;