import React ,{useState} from 'react'
import {BiCurrentLocation} from "react-icons/bi";
import {IoMdWifi} from "react-icons/io";
import "./BookingPage.css"


function BookingPage() {
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

   
<div className="bg-white">
  <div className="pt-6">
    <h1 className="text-black text-2xl items-centre my-8 justify-center flex">The Villa @ Diani/Galu Beach, Aircon, Pool</h1>


   
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://www.dailynautica.com/wp-content/uploads/2020/12/Air-96-Nauta-Design-The-Island.jpg" alt="." class="h-full w-full object-cover object-center" />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="https://tcdconstruction.co.uk/wp-content/uploads/2018/09/office-interior-design-conference-room.jpg" alt="." class="h-full w-full object-cover object-center" />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="https://assets.vogue.com/photos/60a55df57881505c9fecf8af/master/w_1600%2Cc_limit/dc60abc6-a945-4b02-9b23-cc00d1077cd6.jpg" alt="." class="h-full w-full object-cover object-center" />
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="https://insideparkcityrealestate.com/wp-content/uploads/2020/01/Airbnb-while-selling-your-house.jpg" alt="." class="h-full w-full object-cover object-center" />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="https://travelfreak.com/wp-content/uploads/2019/10/homeaway-vs-airbnb-vs-vrbo.jpg" alt="." class="h-full w-full object-cover object-center" />
        </div>
        
        
      </div>

      
      </div>
      
      
    </div>

    <div className="mx-auto max-w-2xl px-4 pb-16 pt-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,0fr] lg:gap-x-8 lg:px-8 lg:pb-2 lg:pt-5">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Private room in home hosted by bruce</h3>
      </div>

    
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">$192/day</p>

      
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
             
              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
            <p className="sr-only">4 out of 5 stars</p>
            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
          </div>
        </div>

        <form className="mt-10">
        <label htmlFor="checkIn">Check-in date and time:</label>
              <input
                type="datetime-local"
                id="checkIn"
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
              />
              <br />
              <label htmlFor="checkOut">Check-out date and time:</label>
              <input
                type="datetime-local"
                id="checkOut"
                value={checkOutTime}
                onChange={(e) => setCheckOutTime(e.target.value)}
              />
              <br />
              <button type="button" onClick={handleCheckIn}>
                Check-in
              </button>
              <button type="button" onClick={handleCheckOut}>
                Check-out
              </button>
            </form>
            <p>Check-in time: {checkInTime}</p>
            <p>Check-out time: {checkOutTime}</p>
       

    
          <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">RESERVE</button>
        </div>
        
      </div>

      <div className=" lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6 lg:mb-10" >
    
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-6">
            <p className="text-base text-gray-900 pl-5">4 Geusts 1 bedroom 1 bed</p>
          </div>
        </div>

        <div className="mt-8 " >
        <div className="ml-6 flex gap-2" >
          <IoMdWifi />

          <h3 className="text-sm font-medium text-gray-900  ">Great For Remote Work</h3>
        </div>
          <div className="mt-4 ml-10">
            <p className="ml-3 text-gray-400">Fast wifi at 315 Mbps, plus a dedicated workspace in a common area.</p>
           
          </div>
        </div>
        <div Name="mt-10 " >
        <div className="ml-6 flex gap-2" >
          <BiCurrentLocation />

          <h3 className="text-sm font-medium text-gray-900 ">Great Location</h3>
        </div>
          <div className="mt-3">
            <p className="ml-12 text-gray-400">100% of recent guests gave the location a 5-star rating.</p>
           
          </div>
        </div>

        <div className="mb-8  p-5">
          <h2 className="text-sm font-medium text-gray-900  ">LeisureSpace</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">Every booking includes free protection from Host cancellations,<br/>
            listing inaccuracies<br/>and other issues like trouble checking in.<strong>Learn More</strong></p>
            <p className=" text-sm text-gray-600 mt-4">Located in Nairobi, Sente Airbnb provides accommodation with free<br/>
             private parking.Kenyatta International Conference Centre is 8 km from the apartment,<br/> while Nairobi National Museum is 11 km away. The nearest airport is Wilson Airport,<br/>
              7 km from Sente Airbnb.</p>
          </div>
        </div>
      </div>
    </div>
  


    
  )
}

export default BookingPage