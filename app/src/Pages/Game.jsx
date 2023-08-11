import React, { useContext, useEffect } from 'react';
import ScreenLayout from '../Layout/ScreenLayout';
import { useNavigate, useParams } from 'react-router-dom';
import Simon from '../Games/Simon';
import HappyFace from '../Games/HappyFace';
import { UserContext } from '../Context/UserProvider';

const Game = () => {
  const params = useParams();
  const { addGameScore } = useContext(UserContext);
  const navigate = useNavigate();

  const onGameFinish = (message) => {
    const result = message.data;
    if (!result.points) {
      return;
    }

    addGameScore(params.gameId, result.points).then(() => {
      navigate('/score/' + params.gameId);
    });

  }

  useEffect(() => {
    window.addEventListener("message", onGameFinish);

    return () => {
      window.removeEventListener('message', onGameFinish);
    }
    // eslint-disable-next-line
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