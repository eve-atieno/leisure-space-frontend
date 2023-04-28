import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { IoMdWifi } from "react-icons/io";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function BookingPage({ spaces }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  // const [totalPrice, setTotalPrice] = useState(0);

  const currentTime = new Date();

  function handleCheckInChange(event) {
    setCheckInTime(event.target.value);
  }

  function handleCheckOutChange(event) {
    setCheckOutTime(event.target.value);
  }

  // function calculateTotalPrice() {

    // if (checkInDate > checkOutDate) {
    //   alert("Check-out time must be after check-in time");
    // }
    const diffInMs = checkOutDate - checkInDate;
    const diffInDays = Math.floor(diffInMs / (24 * 60 * 60 * 1000));
    const totalCost = diffInDays * 3500;



    
    
    const total =  totalCost ;

    setTotalPrice(total);
  }


  const space = spaces.find((space) => space.id === parseInt(id));
  //image
  const image = space.media[1].image_url;

  //price
  // const price = space.price;
  // console.log(space.id + "space id");/

  // post a booking
  const submitBooking = (e) => {
    e.preventDefault();
    const booking = {
      start_date: checkInTime,
      end_date: checkOutTime,
      profile_id: 1,
      space_id: space.id,
    };
    fetch("http://127.0.0.1:000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          // console.log(response.error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Reserve successful!",
            showConfirmButton: false,
            position: "top",
            timer: 1500,
          });
          navigate("/reserve");
          
        }
      });
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-black text-2xl items-centre my-8 justify-center flex">
          {space.name}
        </h1>
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={space.media[0].image_url}
              alt="."
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={space.media[1].image_url}
                alt="."
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={space.media[2].image_url}
                alt="."
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={space.media[3].image_url}
                alt="."
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={space.media[4].image_url}
                alt="."
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,0fr] lg:gap-x-8 lg:px-8 lg:pb-2 lg:pt-5">
        <div className="lg:col-span-2  lg:pr-8">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Private room in home hosted by bruce
          </h3>
        </div>
        <div className="mt-4  ml-20 pl-20 lg:row-span-3 ">
          <p className="text-3xl  text-gray-900">Ksh {space.price}/day</p>
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-200 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  justify-evenly">
        <div className=" lg:col-span-2 lg:col-start-1  lg:pr-8 lg:pt-6 lg:mb-10">
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900 ml-12">
                4 Geusts 1 bedroom 1 bed
              </p>
            </div>
          </div>
          <div className="mt-8 ">
            <div className="ml-12 flex gap-2">
              <IoMdWifi />
              <h3 className="text-lg font-medium text-gray-900  ">
                Great For Remote Work
              </h3>
            </div>
            <div className="mt-4 ml-10">
              <p className="ml-3 text-gray-400">
                Fast wifi at 315 Mbps, plus a dedicated workspace in a common
                area.
              </p>
            </div>
          </div>
          <div Name="mt-10 ">
            <div className="ml-12 flex gap-2">
              <BiCurrentLocation />
              <h3 className="text-lg font-medium text-gray-900 ">
                Great Location
              </h3>
            </div>
            <div className="mt-3">
              <p className="ml-12 text-gray-400">
                100% of recent guests gave the location a 5-star rating.
              </p>
            </div>
          </div>
          <div className="  p-5">
            <h2 className="text-xl font-medium text-gray-900  ">
              LeisureSpace
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-lg text-gray-600">
                Every booking includes free protection from Host cancellations,
                <br />
                listing inaccuracies
                <br />
                and other issues like trouble checking in.
                <strong>Learn More</strong>
              </p>
              <p className="text-gray-600 text-lg mt-4">
                Located in Nairobi, Sente Airbnb provides accommodation with
                free
                <br />
                private parking.Kenyatta International Conference Centre is 8 km
                from the apartment,
                <br /> while Nairobi National Museum is 11 km away. The nearest
                airport is Wilson Airport,
                <br />7 km from Sente Airbnb.
              </p>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="lg:col-span-2 mt-4 lg:col-start-3 lg:pr-8 lg:pt-6 lg:mb-10">
          <form onSubmit={submitBooking} className="mt-10">
            <label htmlFor="checkIn" className="block mb-2">
              Check-in date and time:
            </label>
            <input
              type="datetime-local"
              id="checkIn"
              value={checkInTime}
              onChange={handleCheckInChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
              required
            />
            <label htmlFor="checkOut" className="block mb-2">
              Check-out date and time:
            </label>
            <input
              type="datetime-local"
              id="checkOut"
              value={checkOutTime}
              onChange={handleCheckOutChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
              required
            />
            <button
              type="button"
              // onClick={calculateTotalPrice}
              className="block mb-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Calculate Total Price
            </button>

            <p> ksh:{totalPrice}</p>

            <label htmlFor="guest" className="block mb-2">
              Number of guests:
            </label>
            <input
              type="number"
              id="numberofguest"
              className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />
            {isLoggedIn ? (
              <button
                type="submit"
                className="block w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Reserve
              </button>
            ) : (
              <Link to="/login" className="block w-full text-center mb-4">
                <button
                  type="button"
                  className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                  Login to Reserve
                </button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
