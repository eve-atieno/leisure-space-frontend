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
              <h3>Explore Nairobi</h3>
              </div>
                <img
                  className="d-block w-100 img"
                  src="https://images.pexels.com/photos/13348192/pexels-photo-13348192.jpeg?cs=srgb&dl=pexels-antony-trivet-13348192.jpg&fm=jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
              <div className='texts'>
              <h3>Explore Mombasa</h3>
              </div>
                <img
                  className="d-block w-100 img"
                  src="https://images.squarespace-cdn.com/content/v1/52f00078e4b089eccb42cf0e/1425317913558-9MR0N1W0D49EBZXJZ521/Mombasa+by+Night"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className='texts'>
              <h3>Explore Kisumu</h3>
              </div>
                <img
                  className="d-block w-100 img"
                  src="https://www.danstalter.com/wp-content/uploads/2018/12/IMG_20180922_175913.jpg"
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