import React, { createContext, useEffect, useState } from 'react'
import ArenaService from '../Services/ArenaService';

const UserContext = createContext();

const UserProvider = (props) => {

  const [gameScores, setGameScores] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [nickname, setNickname] = useState('');
  const [position, setPosition] = useState(null);
  const [bonus, setBonus] = useState(0);
  const [email, setEmail] = useState(null);

  const addGameScore = (gameId, score) => {
    return new Promise((resolve, reject) => {

      if (!gameScores.length) {
        gameScores.push()
      }
      const nextScores = [
        // Items before the insertion point:
        ...gameScores.slice(0, gameId),
        // New item:
        score,
        // Items after the insertion point:
        ...gameScores.slice(gameId)
      ];

      setGameScores(nextScores);
      resolve(true);
    });
  }

  const getTotalScore = () => {
    console.log(gameScores);

    if (!gameScores.length) {
      return 0;
    }

    let total = gameScores.reduce((acumulador, valorActual) => { return acumulador + valorActual; });
    return total;
  }

  const registerEmail = (email) => {
    return ArenaService.finish(nickname, totalScore);
  }

  const registerNickname = (nickname) => {
    return ArenaService.finish(nickname, totalScore);
  }

  useEffect(() => {
    setTotalScore(getTotalScore());
    // eslint-disable-next-line
  }, [gameScores]);


  return (
    <UserContext.Provider value={{ addGameScore, gameScores, totalScore, nickname, setNickname, position, bonus }}>{props.children}</UserContext.Provider>
  )
}

export { UserProvider, UserContext };