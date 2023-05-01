import React from "react";
import "tailwindcss/tailwind.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/Images/navbar.png";
import { useState, useEffect } from "react";


const Invoice = () => {
  const generatePDF = () => {
    const input = document.getElementById("invoice");
    html2canvas(input, { dpi: 300 }).then((canvas) => {
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 595, 842);
      pdf.save("invoice.pdf");
    });
  };

  // const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));

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



  const [bookings, setBookings] = useState([]);
  const [lastBooking, setLastBooking] = useState('');

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
      setBookingDates([
        lastBooking.start_date,
        lastBooking.end_date,
      ]);
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
  console.log("start date", bookingDates[0]);
  console.log("end date", bookingDates[1]);


  // get the price of the space multiplied by the number of days
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (numberOfDays > 0) {
      setTotalPrice(numberOfDays * lastBooking.space.price);
    }
  }, [numberOfDays]);
  console.log(totalPrice);


  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
    <div id="invoice" className="bg-white w-96 h-max shadow-md rounded my-6 p-6">
      <div className="flex justify-between mb-2">
        <img src={logo} alt="logo" className="h-20" />
        <div className="flex flex-col text-xs">
          <p className="font-bold">LeisureSpace</p>
          <p>P.O.box Nairobi</p>
          <p>+254 708567897</p>
          <p>Nairobi, Kilimani 600</p>
        </div>
      </div>
      <div className="flex justify-between border-b pb-2 mb-4">
        <p className="font-bold">Item Description</p>
        <p className="font-bold">Amount</p>
      </div>
      { lastBooking ? (
        <div>
          <div className="flex justify-between mb-2">
            <p>{lastBooking.space.name}</p>
            <p>Ksh {lastBooking.space.price}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Name:</p>
            <p>{user.name}</p> 
          </div>
          <div className="flex justify-between mb-2">
            <p>Start Date:</p>
            <p>{bookingDates[0]}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>End Date:</p>
            <p>{bookingDates[1]}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Number of Days:</p>
            <p>{numberOfDays}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Payment Method:</p>
            <p className="font-bold">Credit Card</p>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold">
            <p>Total</p>
            <p>Ksh {totalPrice}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-between mb-2">
          <p>No Bookings</p>
        </div>
      )}
     
    </div>
     <button
        className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generatePDF}
      >
        Download PDF
      </button>
  </div>
);
};

export default Invoice;