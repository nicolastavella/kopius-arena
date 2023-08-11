import React, { useEffect, useState } from 'react'
import ScreenLayout from '../Layout/ScreenLayout'
import ArenaService from '../Services/ArenaService';
import Header from '../Components/Header';

const Scoreboard = () => {
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    ArenaService.getScoredboard().then((scoreboard) => setScoreboard(scoreboard));

    return () => {
      setScoreboard([]);
    }
  }, []);

  return (
    <ScreenLayout>
      <Header />
      <div style={{ textAlign: "center", fontSize: "0.8em", marginTop: "0.5em" }}>Scoreboard</div>
      {scoreboard.map((item) => (
        <div style={{display:"flex", flexDirection:"row", padding:"0.2em"}}>
          <div style={{flexShrink:1, fontSize:"0.7em"}}>{item.position}</div> 
          <div style={{flexGrow:1,  fontSize:"0.7em", marginLeft:"0.3em"}}>{item.nickname}</div>
          <div style={{flexShrink:1,  fontSize:"0.7em"}}>{item.points}</div>
        </div>
      ))}
    </ScreenLayout>
  )
}

export default Scoreboard;