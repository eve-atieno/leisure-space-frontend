import React ,{useState} from 'react'
import beachView from '../Images/beachview.jpeg'
import cabin from '../Images/cabin.jpeg'
import glassWindow from '../Images/glasswindow.jpeg'
import mountainView from '../Images/mountainview.jpeg'
import pool from '../Images/pool.jpeg'
import './BookingPage.css'
import {IoMdWifi} from "react-icons/io";
import {BiCurrentLocation} from "react-icons/bi";
import {AiTwotoneStar} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";
// import ReservePage from "./ReservePage"

function Page3() {
     
        const[checkInTime,setCheckInTime]=useState("")
        const[checkOutTime,setCheckOutTime]=useState("")
         
        const handleCheckIn= ()=>{
            const currentTime = new Date().toLocaleString()
            setCheckInTime(currentTime)
    }
    const handleCheckOut= ()=>{
        const currentTime = new Date().toLocaleString()
        setCheckOutTime(currentTime)

    }
  return (
    <>
    <h1 className="heading">The Villa @ Diani/Galu Beach, Aircon, Pool</h1>
    <div className='container'>
     
      <div className="left-half">
        <img src={beachView} alt="beachview" />
      </div>
      <div className="right-half">
        <img src={cabin} alt="cabin" />
        <img src={glassWindow} alt="glasswindow" />
        <img src={mountainView} alt="mountainview" />
        <img src={pool} alt="pool" />
      </div>
    </div>
    <div className="content-container">
        <div className="left-content">
        <div className="text-1">
        <h4>Private room in home hosted by Bruce</h4>
          <p>4 guests,1 bedroom,1bed,1 bath</p>
        </div>
        <div className="text-2"><h3 ><IoMdWifi /><span>Great for remote work</span></h3>
          <p>Fast wifi at 315 Mbps, plus a dedicated workspace in a common area.</p>
        </div>
        <div className="text-3"><h3 ><BiCurrentLocation/><span>Great Location</span></h3>
          <p>100% of recent guests gave the location a 5-star rating.</p>
        </div>
        <div className="heading-2">
          <h2><span>Leisure</span>Space</h2>
           <p className="paragraph">Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.<strong>Learn More</strong></p>
          <p className='paragraph-2'>Located in Nairobi, Sente Airbnb provides accommodation with free private parking.
          Kenyatta International Conference Centre is 8 km from the apartment, 
          while Nairobi National Museum is 11 km away. The nearest airport is Wilson Airport, 7 km from Sente Airbnb.</p> 
          
        </div>
        </div>
        <div className="right-content">
          {/* <div className="card">
            <div className="card-content">
              <p><strong>150$/day </strong></p>
              <p><AiTwotoneStar />4.5</p>
              <p>150 reviews</p>
            </div> */}
            <div className="prizing">

                <form>
                <button type="button" onClick={handleCheckIn}> CheckIn</button>
                <button type="button"onClick={handleCheckOut}> CheckOut </button>
                    <label for="checkin"></label>
                    <input type="date-time local" id="checkin" value={checkInTime} onChange={(e)=>setCheckInTime(e.target.value)} />
                    <br />
                
                    <label for="checkout"></label>
                    <input type="date-time local" id="checkout"  value={checkOutTime} onChange={(e)=>setCheckOutTime(e.target.value)}/>
                    <br />
                    <p>check-in time:{checkInTime}</p>
                    <p>check-out time:{checkOutTime}</p>


                </form>
                {/* <button className='btn'><ReservePage/>RESERVE</button> */}
            {/* <p><strong>Geust</strong></p> */}
            </div>
            {/* <div className="cancel">
              <h3>CANCELLATION POLICIES</h3>
              <p>Non-refundable · $314 total <BsCircle /></p>
              <p>Refundable · $349 total <BsCircle /> </p>
              <p className="paragraph-3">Free cancellation before Jun 3.
              Cancel before check-in on Jun 4 for a partial refund.</p>
              
            </div> */}
            {/* <button className='btn'>RESERVE</button> */}
          {/* </div> */}
          {/* <div className="prize">
            <p>$150 X 5 Nights <strong>750$</strong></p>
            <p>Service Fee <strong>150$</strong></p>
          </div> */}
         

        </div>
        
        
      </div>

    </>
  )
}


export default Page3