import React, { useEffect } from 'react'
import ScreenLayout from '../Layout/ScreenLayout'
import { useParams } from 'react-router-dom'
import Simon from '../Games/Simon';
import HappyFace from '../Games/HappyFace';

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
      case '2':
        return <HappyFace />;
      default:
        break;
    }
  }

  return (
    <ScreenLayout>{(getGame(params.gameId))}</ScreenLayout>
  )
}

export default Game