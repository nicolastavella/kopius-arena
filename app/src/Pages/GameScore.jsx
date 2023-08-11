import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserProvider';
import ScreenLayout from '../Layout/ScreenLayout';
import { useParams } from 'react-router-dom';
import Button from '../Components/Button';
import Header from '../Components/Header';
import RegisterDialog from '../Components/RegisterDialog';

const GameScore = () => {
    const params = useParams();
    const { lastScore } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const handleRegisterClick = () => {
        setOpen(true);
    }

    return (
        <ScreenLayout>
            <Header />
            <div style={{ textAlign: "center", marginTop: "1em" }}>GAME OVER</div>
            <div style={{ textAlign: "center", color: "#ff5588" }}>You won {lastScore} points</div>
            <div style={{ textAlign: "center", fontSize: "0.8em", marginTop: "2em" }}>Keep playing to accumulate more points</div>

            <div style={{ display: "flex", flexDirection: "row", margin: "5%" }}>
                <div style={{ width: "28%" }}>
                    <Button to={'/game/' + params.gameId}>Retry</Button>
                </div>
                <div style={{ width: "65%", marginLeft: "5%" }}>
                    <Button to="/games">More Games</Button>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", margin: "5%" }}>
                <Button onClick={handleRegisterClick}>Register your score</Button>
            </div>
            <RegisterDialog show={open} handleClose={() => setOpen(false)} />
        </ScreenLayout>
    )
}

export default GameScore;
