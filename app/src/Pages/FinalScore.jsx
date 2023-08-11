import React, { useContext } from 'react'
import ScreenLayout from '../Layout/ScreenLayout'
import { UserContext } from '../Context/UserProvider'

const FinalScore = () => {
  const {nickname, totalScore, position, bonus} = useContext(UserContext);

  return (
    <ScreenLayout>
      <div>Final Score</div>
      <div>{nickname}</div>
      <div>{totalScore} points</div>
      <div>{position}* Place</div>
      {bonus ? (
        <span>{bonus}X Bonus applied!</span>
      ) : (
        <button>Multiplier bonus!</button>
      )}
      <button>View Scoreboard</button>
    </ScreenLayout>
  )
}

export default FinalScore