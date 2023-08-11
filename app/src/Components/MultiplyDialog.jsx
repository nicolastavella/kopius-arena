import React, { useContext, useState } from 'react'
import Button from './Button';
import ArenaService from '../Services/ArenaService';
import { UserContext } from '../Context/UserProvider';
import { useNavigate } from 'react-router-dom';

const MultiplyDialog = (props) => {
  const [email, setEmail] = useState('');
  const {setBonus} = useContext(UserContext);

  const handleMultiply = () => {
    if (!email) {
      return;
    }

    ArenaService.multiply(email).then((res) => {
      setBonus(res.bonus);
      props.handleClose();
    });
  }

  return (
    <div style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: (props.show ? 'flex' : 'none'),
      alignItems: "center",
      justifyContent: "center",
      zIndex: "999",
      position: "fixed",
      backgroundColor: "rgba(33,33,33,0.8)"
    }}>
      <div style={{ backgroundColor: "#FFF", padding: "2em", border: "0.2em solid #f53e5e", position: "relative", color: "#000" }}>
        <div style={{ width: "1em", position: "absolute", top: "0.1em", right: "0.4em" }}>
          <Button onClick={() => props.handleClose()}>X</Button>
        </div>
        <div style={{ textAlign: "center", fontSize: "0.8em", marginTop: "1em" }}>Subscribe to Kopius newsletter and multiply your points!</div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <Button onClick={handleMultiply}>Multiply</Button>
      </div>
    </div>
  )
}

export default MultiplyDialog;