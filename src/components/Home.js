import './Home.css'
import './NavBar'
function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (
      <div className="hero">
        <div className='HomePage'></div>
        <div className='ContentContainer'>
          <h1>Explore nearby</h1>
          <div className='ContentPlace'>
            <div className='ContentCard'>
              <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1' className='imgs'/>
              <div className='texts'>
                 <p>Nakuru</p>
                 <span>3hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
               <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c6/e8/52/merica-hotel.jpg?w=700&h=-1&s=1' className='imgs'/>
               <div className='texts'>
                 <p>Nairobi</p>
                 <span>3 hrs from Nakuru</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src='https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg' className='imgs' />
                <div className='texts'>
                 <p>Mombassa</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src='https://sncdn.com/imagecache/db/id/611300/325409a.jpg' className='imgs' />
                <div className='texts'>
                 <p>Narok</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src='https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_332,q_75,w_640/v1/clients/sugarland/ExteriorPool_32a60102-2ff3-4382-8bbb-aaabbdb2a338.jpg' className='imgs' />
                <div className='texts'>
                 <p>Kisumu</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src="https://www.fodors.com/wp-content/uploads/2022/10/Aramness_120.jpeg" className='imgs' />
                <div className='texts'>
                 <p>Malindi</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
          </div>
        </div>
        <div className='ContentPlaceToVisit'>
          <h2>Not sure where<br/> to go? Perfect.</h2>
          <button>Try Us</button>
        </div>
        <div className='FooterUser'>
          <div className='FooterItems'>
            <div className='FooterText'>
              <h1>Logo</h1>
              <h1>About</h1>
              <h1>Contact</h1>
              <h1>Team</h1>
            </div>
            <hr/>
            <div className='FooterText'>
						<i class="bi bi-youtube"></i>
						<i class="bi bi-facebook"></i>
						<i class="bi bi-twitter"></i>
						<i class="bi bi-linkedin"></i>
						<i class="bi bi-google"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
