import './Home.css'
import './NavBar'
import Footer from './Footer';
function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (
      <div className="hero">
        <div className='ContentPlaceToVisit'>
          <h2>Not sure where<br/> to go? Perfect.</h2>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full btnx'>Try Us</button>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Home;
