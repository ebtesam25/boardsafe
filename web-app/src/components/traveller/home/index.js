import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
//import assets
import HomeImg from '../../../assets/images/home.png';
import LogoImg from '../../../assets/images/logo.png';
import AirImg from '../../../assets/images/airplane.png';
import BusImg from '../../../assets/images/bus.png';
import MetroImg from '../../../assets/images/metro.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        var settings = {
            dots: true,
            slide: "p",
            adaptiveHeight: true,
            infinite: true,
            slidesToShow: 1,
          };
        return (
         <div >
            <div style={{float: "right", display:"block",margin:"auto", width:"40%", backgroundColor:"#EFF1F3", height:"100vh"}}>
              <div style={{float: "right", marginRight:"7vw", marginTop:"10px"}}><img src={LogoImg} alt="logo" width="75%"/></div>
              <div style={{float: "right",position:"absolute",bottom:"10%", right:"10%"}}><img src={HomeImg} alt="home" height="400vh"></img></div>
            </div>
            <div style={{float: "left",width:"60%",backgroundColor:"#009FB7",display:"block", height:"100vh"}}>
              <div style={{margin:"auto",marginTop:"80px",fontFamily:"Avenir", fontSize:"9.75vh",lineHeight:"100%", color:"#EFF1F3", width:"100%", textAlign:'center'}}>
                Welcome!
                <div style={{fontFamily:"Aileron-UltraLight",  fontSize:"5vh", color:"#EFF1F3",marginTop:0,textAlign:'center'}}>
                How would you like to travel? 
                </div>
                </div>
                <div style={{ width:"50%",display:"block", margin:"auto"}}>
                <Slider {...settings}>
                <Link to='/book'> <img src={AirImg} width="100%"/></Link>
                <Link to={this.props.myroute} onClick={'#'}><img src={BusImg} width="100%"/></Link>
                <Link to={this.props.myroute} onClick={'#'}><img src={MetroImg} width="100%"/></Link>
                   
                </Slider>
               </div>
                
            </div>
         </div>   
        );
    }
}

export default Home;