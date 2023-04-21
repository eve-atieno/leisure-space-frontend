import "./Home.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";

function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (
      <>
        <NavBar /> 
        <div className="hero">
          <div className="ContentPlaceToVisit">
            <div className="ContentImage">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 img"
                    src="https://images.pexels.com/photos/13348192/pexels-photo-13348192.jpeg?cs=srgb&dl=pexels-antony-trivet-13348192.jpg&fm=jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
                    <h3 className="text-center">Explore Nairobi</h3>
                    <div className="flex justify-center items-center mt-4">
                      <button className="rounded-full bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                        View Spaces
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                 
                  <img
                    className="d-block w-100 img"
                    src="https://images.squarespace-cdn.com/content/v1/52f00078e4b089eccb42cf0e/1425317913558-9MR0N1W0D49EBZXJZ521/Mombasa+by+Night"
                    alt="Second slide"
                  />
                  <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
                    <h3 className="text-center">Explore Mombasa</h3>
                    <div className="flex justify-center items-center mt-4">
                      <button className="rounded-full bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                        View Spaces
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://www.danstalter.com/wp-content/uploads/2018/12/IMG_20180922_175913.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className="d-flex justify-content-center align-items-center flex-column h-100">
                    <h3 className="text-center">Explore Kisumu</h3>
                    <div className="flex justify-center items-center mt-4">
                      <button className="rounded-full bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                        View Spaces
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        
          {/* <footer>
            <Footer />
          </footer> */}
        </div>
      </>
    );
  }
}
export default Home;
