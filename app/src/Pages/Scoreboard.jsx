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
      <Header/>
      <div style={{textAlign:"center", fontSize:"0.8em", marginTop:"0.5em"}}>Scoreboard</div>
      {scoreboard.map((item) => (
        <div>{item.position} - {item.nickname} - {item.points}</div>
      ))}
    </ScreenLayout>
  )
}

export default Scoreboard;