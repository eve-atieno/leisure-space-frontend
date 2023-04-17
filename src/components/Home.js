import './Home.css'
function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (
      <div className="hero">
        Hello
      </div>
    )
  }
}

export default Home;
