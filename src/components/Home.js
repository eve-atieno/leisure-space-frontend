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
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/bf/51/8f/lake-nakuru-lodge.jpg' className='imgs'/>
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
                <img src='https://sncdn.com/imagecache/db/id/611300/325409a.jpg' className='imgs' />
                <div className='texts'>
                 <p>Mombassa</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src='https://sncdn.com/imagecache/db/id/611300/325409a.jpg' className='imgs' />
                <div className='texts'>
                 <p>Mombassa</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src='https://sncdn.com/imagecache/db/id/611300/325409a.jpg' className='imgs' />
                <div className='texts'>
                 <p>Mombassa</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
            <div className='ContentCard'>
                <img src='https://sncdn.com/imagecache/db/id/611300/325409a.jpg' className='imgs' />
                <div className='texts'>
                 <p>Mombassa</p>
                 <span>10hrs from Nairobi</span>
              </div>
            </div>
          </div>
        </div>
        <div className='ContentPlaceToVisit'>
          <h2>Not sure where<br/> to go? Perfect.</h2>
          <button>Try Us</button>
        </div>
      </div>
    );
  }
}

export default Home;
