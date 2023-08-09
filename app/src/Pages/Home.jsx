import React from 'react'

const Home = () => {
  return (
    <div style={{
      width: '100%',
      position: "absolute",
      height: "100%",
      background: "url('/assets/home.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto 100%",
      backgroundPosition: "top center",
    }}>
      <a href={'game/1'}>Start</a>
      <a href={'scoreboard'}>Scoreboard</a>
    </div>
  )
}

export default Home