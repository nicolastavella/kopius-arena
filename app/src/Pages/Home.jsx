import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

const Home = () => {
  return (
    <div style={{
      width: '100%',
      position: "absolute",
      height: "100%",
      background: "url('/assets/back_home.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "fill",
      backgroundPosition: "top center",
    }}>
      <div style={{
        width: '100%',
        position: "absolute",
        height: "95%",
        marginTop: "5%",
        background: "url('/assets/machine.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundPosition: "center top",
        fontFamily: 'Handjet',
        fontSize: '3em',
        color: '#FFFFFF',
      }}>
        <div style={{ display: "flex", flexDirection: "column", marginTop:"2.7em", alignItems:"center"}}>
          <div style={{ marginBottom: "0.5em", width:"300px", maxWidth:"40%", fontSize:"0.8em"}}>
            <Button to={'/games'}>Start</Button>
          </div>
          <div style={{ marginBottom: "0.5em", width:"250px", maxWidth:"40%", fontSize:"0.7em" }}>
            <Button to={'/scoreboard'}>Scoreboard</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home