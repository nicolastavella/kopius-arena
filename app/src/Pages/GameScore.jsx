import React, { useContext } from 'react'
import { UserContext } from '../Context/UserProvider';
import ScreenLayout from '../Layout/ScreenLayout';
import { useParams } from 'react-router-dom';

const GameScore = () => {
    const params = useParams();
    const { getTotalScore, totalScore, gameScores } = useContext(UserContext);

    console.log(gameScores);

    return (
        <ScreenLayout>
            <div>Game Over</div>
            <div>You won {gameScores[params.gameId]} points</div>
            <div>Keep playing to accumulate more points</div>
            <a href={'/game/' + params.gameId}>Retry</a>
            <a href="/games">Next Game</a>
            <button href="/final-score">Register in Scoreboard</button>
        </ScreenLayout>
    )
}

export default GameScore;
