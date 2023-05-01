import React from "react";
import "./styles.css";
//import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
//import hotel from "../../assets/hotels/hotel-2.jpeg";
import { Navigation, Pagination,  } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css'; // core Swiper
import {  Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.css';



function Card() {
  return (
    <div className="card-container">
        <div className="card-box">

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        EffectCube={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation,]}
        style={{ height: "270px", width: "270px"}}
        bulletClass={"background-color:#fff;"}
       
      >

        
          <SwiperSlide >
            <img
              src={"https://netstorage-tuko.akamaized.net/images/0fgjhs72cekoc2vcp.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://mostuniquehotels.com/uploads/xwatamutreehousekenya.jpg.pagespeed.ic.Z2cYK24gHD.webp"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
        
        </Swiper>
          
            <div className="card-info-flex">
                <h4 className="name">Diani Beach</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Mombasa</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>Beach and sunset views</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 400</span> night</p>
        </div>
        <div className="card-box">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation,]}
        style={{ height: "270px", width: "270px"}}
        bulletClass={"background-color:#fff;"}
       
      >

        
          <SwiperSlide >
            <img
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASNUA9SdE2mJq9udcxLJX81SQlISN-l8ORYzmyKNtgIWdYhrK1RUMmNFyARzp0aki3cM&usqp=CAU"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Cover13.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/giraffe-manor.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://a0.muscache.com/im/pictures/b1199b75-f251-4e37-8675-7509800b5fc9.jpg?im_w=1200"} className="card-img" alt=""
            />
          </SwiperSlide>
        
        </Swiper>
            
            
            <div className="card-info-flex">
                <h4 className="name">Desert Home</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Turkana</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>2km from Turkana</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 400</span> night</p>
        </div>
        <div className="card-box">

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation,]}
        style={{ height: "270px", width: "270px"}}
        bulletClass={"background-color:#fff;"}
       
      >

        <SwiperSlide >
            <img
              src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://sncdn.com/imagecache/db/id/3927721/6578788a.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
        
        </Swiper>

            <div className="card-info-flex">
                <h4 className="name">lux homes</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Kilimani</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>pool infront</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 600</span> night</p>
        </div>
        <div className="card-box">

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation,]}
        style={{ height: "270px", width: "270px"}}
        bulletClass={"background-color:#fff;"}
       
      >

        <SwiperSlide >
            <img
              src={"https://a0.muscache.com/im/pictures/miso/Hosting-41340055/original/be682bdb-7b0d-4d42-a687-0c73b675173a.jpeg?im_w=1200"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://a0.muscache.com/im/pictures/miso/Hosting-41340055/original/b33cd243-abd8-4003-878f-27795065fbfc.jpeg?im_w=720"} className="card-img" alt=""
            />
          </SwiperSlide>
         
          
        
        </Swiper>

            <div className="card-info-flex">
                <h4 className="name">Tent homes</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Maasai Mara</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>10km from Narok</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 300</span> night</p>
        </div>
        <div className="card-box">

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation,]}
        style={{ height: "270px", width: "270px"}}
        bulletClass={"background-color:#fff;"}
       
      >

        <SwiperSlide >
            <img
              src={"https://sncdn.com/imagecache/db/id/3927721/6578788a.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={"https://naivashahotels.com/wp-content/uploads/2021/02/Maiyan-Villas-Nanyuki-7.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
         
          <SwiperSlide >
            <img
              src={"https://naivashahotels.com/wp-content/uploads/2020/10/Maiyan-Villas-Nanyuki-photos-12.jpg"} className="card-img" alt=""
            />
          </SwiperSlide>
        
        </Swiper>

            <div className="card-info-flex">
                <h4 className="name">Luxurius home</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Naivasha</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>Flamigos and sunset views</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 100</span> night</p>
        </div>
        
    </div>
    
  );
}

export default Card;