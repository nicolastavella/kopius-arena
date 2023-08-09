import React, { useEffect } from 'react'
import ScreenLayout from '../Layout/ScreenLayout'
import { useParams } from 'react-router-dom'
import Simon from '../Games/Simon';

const Game = () => {
  const params = useParams();

  const onGameFinish = (message) => {
    const result = message.data;
    if(!result.winner){
      return;
    }
    console.log(result);
  }

  useEffect(() => {
    window.addEventListener("message", onGameFinish);
  
    return () => {
      window.removeEventListener('message', onGameFinish);
    }
  }, []);

  const getGame = (gameId) => {
    switch (gameId) {
      case '1':
        return <Simon />;
      default:
        break;
    }
  }

  return (
    <ScreenLayout>{(getGame(params.gameId))}</ScreenLayout>
  )
}

export default Game