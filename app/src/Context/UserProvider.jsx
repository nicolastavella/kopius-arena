import React, { createContext, useEffect, useState } from 'react'
import ArenaService from '../Services/ArenaService';

const UserContext = createContext();

const UserProvider = (props) => {

  const [gameScores, setGameScores] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [nickname, setNickname] = useState('');
  const [position, setPosition] = useState(null);
  const [bonus, setBonus] = useState(0);
  const [email, setEmail] = useState(null);
  const [lastScore, setLastScore] = useState(0);

  const addGameScore = (gameId, score) => {
    setLastScore(score);
    return new Promise((resolve, reject) => {

      const nextScores = gameScores + score;

      setGameScores(nextScores);
      resolve(true);
    });
  }

  const getTotalScore = () => {
      return gameScores;
  }

  useEffect(() => {
    setTotalScore(getTotalScore());
    // eslint-disable-next-line
  }, [gameScores]);


  return (
    <UserContext.Provider value={{ addGameScore, gameScores, totalScore, nickname, setNickname, setPosition, position, bonus, setBonus, lastScore }}>{props.children}</UserContext.Provider>
  )
}

export { UserProvider, UserContext };