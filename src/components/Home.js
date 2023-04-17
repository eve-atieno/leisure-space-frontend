import './Home.css'
import './NavBar'
function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (
      <div className="hero">
        <div className='HomePage'></div>
      </div>
    )
  }
}

export default Home;
