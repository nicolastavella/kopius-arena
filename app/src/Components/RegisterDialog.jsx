import React, { useContext, useState } from 'react'
import Button from './Button';
import ArenaService from '../Services/ArenaService';
import { UserContext } from '../Context/UserProvider';
import { useNavigate } from 'react-router-dom';

const RegisterDialog = (props) => {
  const [nickname, setNickname] = useState('');
  const { totalScore } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!nickname) {
      return;
    }

    ArenaService.finish(nickname, totalScore).then(() => {
      navigate("/final-score");
    });
  }

  return (
    <div style={{
      top:0,
      left:0,
      width: "100%",
      height: "100%", 
      display: (props.show ? 'flex' : 'none'),
      alignItems: "center",
      justifyContent: "center",
      zIndex: "999",
      position: "fixed",
      backgroundColor:"rgba(33,33,33,0.8)"
    }}>
      <div style={{ backgroundColor: "#FFF", padding:"2em", border:"0.2em solid #f53e5e", position:"relative"}}>
        <div style={{width:"1em", position:"absolute", top:"0.1em", right:"0.4em"}}>
        <Button onClick={()=>props.handleClose()}>X</Button>
        </div>
        <input value={nickname} onChange={setNickname} placeholder="Enter your nick" />
        <Button onClick={handleRegister}>Register score</Button>
      </div>
    </div>
  )
}

export default RegisterDialog;