import React from 'react'
import { Link } from 'react-router-dom'
import ScreenLayout from '../Layout/ScreenLayout'
import Button from '../Components/Button'
import Header from '../Components/Header'

const Games = () => {
  return (
    <ScreenLayout>
      <Header/>
      <div style={{textAlign:"center", fontSize:"0.8em", marginTop:"2em"}}>Select a game:</div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
        <div style={{width:"90%", marginTop:"0.5em"}}>
          <Button to={'/game/1'}>Simon</Button>
        </div>
        <div style={{width:"90%", marginTop:"0.5em"}}>
          <Button to={'/game/2'}>Smile To Kopius</Button>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Games