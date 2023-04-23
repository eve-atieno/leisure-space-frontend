import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomPopup from "./custom-popup";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Reserve() {
   
  const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    };
    const selectionRange = {
      startDate,
      endDate,
      key: 'selection',
    };

    const handleOnclick = () => {
      // submit the data of the calendar
      console.log("start date", startDate);
      console.log("end date", endDate);

    };


  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(false);
  };

  return (
    <>
 <CustomPopup
   onClose = {popupCloseHandler}
    show = {visibility}
    title = "Payment Successful"
  >
    <div className="flex flex-col justify-center items-center">
      <div>
    <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    </div>
    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleOnclick}>Ok</button>

      </div>
      </CustomPopup>


    <div className="flex flex-row m-4 justify-evenly">
      <div className="">
        <div className="flex flex-row mt-3 ml-3">
          <Link to="/booking">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <div>
            <h1>Confirm Your Payment</h1>
          </div>
        </div>

        <div className="m-9">
          <div>
            <h1 className="text-2xl font-bold">Your Trip</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-bold">Dates</h1>
            <p className="font-semi-bold text-2xl
            cursor-pointer hover:text-orange-400
            underline text-blue-500
             " onClick={() => setVisibility(true)}
            >
              Edit
            </p>
          </div>
          <div>
            <p>May 12-May 20</p>
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-bold">Guests</h1>
            <p className="font-semi-bold text-2xl">
              <a href="">Edit</a> 
              </p>
          </div>
          <div>
            <div>
              <p>3 Guests, 2 infants</p>
            </div>
            <hr />
            <div className="text-center">
              <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
                {" "}
                Pay Now
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="max-w-lg p-6 pr-5 mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-row ">
            <div>
              <img
                className="object-cover w-40 h-40 rounded"
                src="https://a0.muscache.com/im/pictures/94939489/6e77d654_original.jpg?im_w=1440"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col ml-4">
              <div>
                <h3> The Villa</h3>
              </div>
              <div>
                <h5> 3 Bedrooms</h5>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p className="text-xl">
              Your Booking Is Secure by
              <span className="font-bold text-orange-400">LeisureSpace</span>
            </p>
          </div>
          <hr />
          <div>
            <h5 className="font-bold">Price Details</h5>
          </div>
          <div className="flex flex-row justify-between">
            <h5>ksh 3000/per night*7</h5>
            <h5>ksh 21000</h5>
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <h5 className="font-bold">Total</h5>
            <h5>ksh 21000</h5>
          </div>
        </div>
      </div>
   </>
  );
}

export default Reserve;
