import React, { useContext, useState } from 'react'
import ScreenLayout from '../Layout/ScreenLayout'
import { UserContext } from '../Context/UserProvider'
import Header from '../Components/Header';
import Button from '../Components/Button';
import MultiplyDialog from '../Components/MultiplyDialog';

const FinalScore = () => {
  const { nickname, totalScore, position, bonus } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleMultiplyClick = () => {
      setOpen(true);
  }
  return (
    <ScreenLayout>
      <Header />
      <div style={{ textAlign: "center", marginTop: "1em" }}>FINAL SCORE</div>
      <div style={{ textAlign: "center", color: "#ff5588", marginTop: "1em" }}>{nickname}</div>
      <div style={{ textAlign: "center", color: "#ff5588" }}>{totalScore} points</div>
      <div style={{ textAlign: "center", color: "#ff5588" }}>{position}º Place</div>
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <div style={{ marginTop: "2em", width: "90%" }}>
          {bonus ? (
            <div style={{ textAlign: "center", color: "#ff5588", fontSize: "1.2em" }}>{bonus}X Bonus applied!</div>
          ) : (
            <Button onClick={handleMultiplyClick}>Multiply your points!</Button>
          )}
        </div>
        <div style={{ marginTop: "1em", fontSize: "0.8em", width: "80%" }}>
          <Button to="/scoreboard">View Scoreboard</Button>
        </div>
      </div>
      <MultiplyDialog show={open} handleClose={() => setOpen(false)} />
    </ScreenLayout>
  )
}

export default FinalScore