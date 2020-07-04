import React, {Component} from "react";
import {Link} from 'react-router-dom';

//import assets
import BookingImg from '../../../assets/images/booking.png';
import LogoImg from '../../../assets/images/logo.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      grpsize: '',
      from: '',
      to: '',
      date: ''
     
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let field = event.target.name;
    let val = event.target.value;
    this.setState({[field]: val});
  }

  handleSubmit(event) {
    alert('Done');
    event.preventDefault();
  }
    render() {
        
        return (
         <div >
            <div style={{float: "right", display:"block",margin:"auto", width:"40%", backgroundColor:"#EFF1F3", height:"100vh"}}>
              <div style={{float: "right", marginRight:"7vw", marginTop:"5%"}}><img src={LogoImg} alt="logo" width="75%"/></div>
              <div style={{float: "right",position:"absolute", bottom:"2%",right:"5%"}}><img src={BookingImg} alt="home" height="450vh"></img></div>
            </div>
            <div style={{float: "left",width:"60%",backgroundColor:"#009FB7",display:"block", height:"100vh"}}>
              <div style={{margin:"auto",marginTop:"80px",marginLeft:"50px",fontFamily:"Avenir", fontSize:"7vh",lineHeight:"100%", color:"#EFF1F3", width:"100%", textAlign:'left'}}>
                Airplane Booking
                
                </div>
                <div style={{ width:"90%",display:"block", margin:"auto", marginTop:"50px", marginLeft:"50px",padding:"2%",fontFamily:"Aileron-Light", color:"white", fontSize:"3.5vh"}}>
                <form onSubmit={this.handleSubmit}>
                <label>
                  Full Name<br></br>
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} style={{backgroundColor:"#99D9E2", borderRadius:"12px", border:"none", padding:"5px",fontSize:"3vh", width:"100%", marginBottom:"5%"}}/>
                </label>
                <label style={{marginLeft:"5%"}}>
                  From<br></br>
                  <input type="text" name="from" value={this.state.from} onChange={this.handleChange} style={{backgroundColor:"#99D9E2", borderRadius:"12px", border:"none", padding:"5px",fontSize:"3vh", width:"100%", marginBottom:"5%"}}/>
                </label>
                <label style={{marginLeft:"5%"}}>
                  To<br></br>
                  <input type="text" name="to" value={this.state.to} onChange={this.handleChange} style={{backgroundColor:"#99D9E2", borderRadius:"12px", border:"none", padding:"5px",fontSize:"3vh", width:"100%", marginBottom:"5%"}}/>
                </label>
                <br></br>
                <label>
                  What is the size of your group?<br></br>
                  <input type="text" name="grpsize" value={this.state.grpsize} onChange={this.handleChange} style={{backgroundColor:"#99D9E2", borderRadius:"12px", border:"none" , padding:"5px",fontSize:"3vh", width:"100%", marginBottom:"5%"}}placeholder="1 if you're travelling alone"/>
                </label>
                <label style={{marginLeft:"5%"}}>
                  Date of Departure<br></br>
                  <input type="date" name="date" value={this.state.date} onChange={this.handleChange} style={{backgroundColor:"#99D9E2", borderRadius:"12px", border:"none" , padding:"5px",fontSize:"3vh", width:"100%", color:"#009FB7"}}/>
                </label>
                <br></br>
                <label>
                  Which seat do you prefer?*<br></br>
                <select style={{backgroundColor:"#99D9E2", borderRadius:"12px",padding:"5px 10px", fontSize:"3vh", color:"#009FB7", border:"none"}}>
                  <option value="window">Window Seat</option>
                  <option value="middle">Middle Seat</option>
                  <option value="isle">Isle Seat</option>
                </select>
                </label>
                <br></br>
               <div style={{fontSize:"2.75vh"}}>*Note: BoardSafe does not guarantee availability of your preferred seat. However, our algorithm will take into consideration your preference try its best.</div> 
                <br></br><br></br>
                <input type="submit" value="Submit" style={{borderRadius:"20px", border:"none", padding:"5px 15px",fontSize:"3vh",fontFamily:"Avenir", color:"#009FB7"}} />
              
              </form>
               </div>
               
            </div>
         </div>   
        );
    }
}

export default Book;