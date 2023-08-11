import React, { useEffect, useState } from 'react'
import ScreenLayout from '../Layout/ScreenLayout'
import ArenaService from '../Services/ArenaService';

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
      {scoreboard.map((item) => (
        <div>{item.position} - {item.nickname}</div>
      ))}
    </ScreenLayout>
  )
}

export default Scoreboard;