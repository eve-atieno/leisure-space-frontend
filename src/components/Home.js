import './Home.css'
import './NavBar'
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (
      <div className="hero">
        <div className='ContentPlaceToVisit'>
          <div className='ContentImage'>
            <Carousel>
              <Carousel.Item interval={1000}>
              <div className='texts'>
              <h3>Hello Uganda</h3>
              </div>
                <img
                  className="d-block w-100 img"
                  src="https://ajkenyasafaris.com/wp-content/uploads/2017/08/547cf2bb-ee15-4615-98ce-f0d053c3893d.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
              <div className='texts'>
              <h3>Hello Uganda</h3>
              </div>
                <img
                  className="d-block w-100 img"
                  src="https://www.sarovahotels.com/stanley-nairobi/assets/images/product/500/sarova-stanley-banner_1902-lounge.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className='texts'>
              <h3>Hello Uganda</h3>
              </div>
                <img
                  className="d-block w-100 img"
                  src="https://media-cdn.tripadvisor.com/media/photo-m/1280/13/dc/03/b2/merica-hotel.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        {/*  */}
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Home;