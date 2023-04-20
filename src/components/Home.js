import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Footer from './Footer';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Home({ user }) {
  if (user) {
    return <h1 className="text-3xl font-bold text-center my-8 flex flex-column min-h-screen">Welcome, {user.username}!</h1>;
  } else {
    return (
      <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className='ContentPlaceToVisit w-full h-screen'>
          <div className='ContentImage'>
            {/* <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="object-cover w-full h-full embed-responsive embed-responsive-16by9"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-685268558501487796/original/c1b5c992-b90a-4296-8d7a-e548e47d2f56.jpeg?im_w=1200"
                  alt="First slide"
                />
                
                <Carousel.Caption>
                  <h3 className="text-2xl  font-semibold  embed-responsive embed-responsive-16by9">First slide label</h3>
                  <p className="text-lg text-black
                  ">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="object-cover w-full h-full embed-responsive embed-responsive-16by9"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-685268558501487796/original/e39dd73f-8449-4b38-a9bf-f3891bae9939.jpeg?im_w=1440"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="text-2xl font-semibold">Second slide label</h3>
                  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="object-cover w-full h-full embed-responsive embed-responsive-16by9"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-685268558501487796/original/818b6296-3482-4f1d-9020-080105e7012f.jpeg?im_w=1440"
                  alt="Third slide"
                />
              
              </Carousel.Item> 
            </Carousel> */}
            {/* create a div that will have a fixed size for the swiper */}

            <div className="w-full h-full flex justify-center items-center">

<Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            ><SwiperSlide>
            <img
                className="w-full h-auto object-cover"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-685268558501487796/original/c1b5c992-b90a-4296-8d7a-e548e47d2f56.jpeg?im_w=1200"
                alt="image slide 1"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="w-full h-full object-cover"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-685268558501487796/original/e39dd73f-8449-4b38-a9bf-f3891bae9939.jpeg?im_w=1440"
                alt="image slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="w-full h-full object-cover"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-685268558501487796/original/818b6296-3482-4f1d-9020-080105e7012f.jpeg?im_w=1440"
                alt="image slide 3"
            />
        </SwiperSlide>
        
            </Swiper>
            </div>
          </div>

        </div>
       
      </div>
      <Footer />
      </>
    );
  }
}

export default Home;
