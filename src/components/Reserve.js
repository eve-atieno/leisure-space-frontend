import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomPopup from "./custom-popup";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Update } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
    key: "selection",
  };

  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(false);
  };

  const [bookings, setBookings] = useState([]);
  const [lastBooking, setLastBooking] = useState("");

  //get the bookings from the database
  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  //get the last booking from the database
  useEffect(() => {
    if (bookings.length > 0) {
      setLastBooking(bookings[bookings.length - 1]);
    }
  }, [bookings]);

  //get the dates of the booking both the start and end date
  const [bookingDates, setBookingDates] = useState([]);
  useEffect(() => {
    if (lastBooking) {
      setBookingDates([lastBooking.start_date, lastBooking.end_date]);
    }
  }, [lastBooking]);

  // subtract the dates of the booking to get the number of days
  const [numberOfDays, setNumberOfDays] = useState(0);
  useEffect(() => {
    if (bookingDates.length > 0) {
      const date1 = new Date(bookingDates[0]);
      const date2 = new Date(bookingDates[1]);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumberOfDays(diffDays);
    }
  }, [bookingDates]);

  // get the price of the space multiplied by the number of days
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (numberOfDays > 0) {
      setTotalPrice(numberOfDays * lastBooking.space.price);
    }
  }, [numberOfDays]);

  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }
  const navigate = useNavigate();


  return (
    <>
      <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
        <div className="flex flex-col justify-center items-center">
          <div>
            {/* with date range i should edit the dates */}
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />

            <div className="flex flex-row justify-center items-center">
              <button
                onClick={() => {}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </CustomPopup>

      <div className="flex flex-row m-4 justify-evenly">
        <div className="">
          <div className="flex flex-row mt-3 ml-3">
            <Link to="/spaces">
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
              <p
                className="font-semi-bold text-2xl
            cursor-pointer hover:text-orange-400
            underline text-blue-500
             "
                onClick={() => setVisibility(true)}
              >
                Edit
              </p>
            </div>
            <div className="flex flex-row justify-around">
              <p>{startDate.toDateString()}</p>
              <p>-</p>
              <p>{endDate.toDateString()}</p>
            </div>
            {/* generate an incubator agreement */}
            <div className="flex flex-row justify-between">
              <Link to="/agreement">
              <h1 className="text-xl font-bold">Agreement</h1>
              </Link>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <hr />
              <div className="text-center">
                <Link to="/invoice">
                  {/* <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
                    Pay Now
                  </button> */}
                  {/* if checkbox is checked then show the buttonif not checked disable the button */}
                  {isChecked ? (
                    <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
                      Pay Now
                    </button>
                  ) : (
                    <button className="bg-orange-200 text-white font-bold py-2 px-4 rounded-full" disabled>
                      Pay Now
                    </button>
                  )}
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-6 pr-5 mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {lastBooking ? (
            <div>
              <div className="flex flex-row ">
                <div>
                  <img
                    className="object-cover w-40 h-40 rounded"
                    src={lastBooking.space.media[0].image_url}
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col ml-4 mt-12">
                  <div>
                    <h3>{lastBooking.space.name}</h3>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <p className="text-xl">
                  Your Booking Is Secure by{" "}
                  <span className="font-bold text-orange-400">
                    LeisureSpace
                  </span>
                </p>
              </div>
              <hr />
              <div>
                <h5 className="font-bold">Price Details</h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5>
                  ksh {lastBooking.space.price} per night x {numberOfDays}
                </h5>
                <h5>ksh {totalPrice}</h5>
              </div>
              <hr />
              <div className="flex flex-row justify-between">
                <h5 className="font-bold">Total</h5>
                <h5>ksh {totalPrice}</h5>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Reserve;
