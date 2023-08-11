import React, { useContext } from 'react'
import Button from './Button'
import { UserContext } from '../Context/UserProvider';

const Header = () => {
    const {totalScore} = useContext(UserContext);

    return (
        <div style={{width:"auto", display:"flex", flexDirection:"row", padding:"1%"}}>
            <div style={{fontSize:"0.6em", flexShrink:1}}>
                <Button to="/"><img alt="Home" src="/assets/icono.png" style={{height:"1em", margin:"0.2em"}}/></Button>
            </div>
            <div style={{fontSize:"0.9em", flexGrow:1, textAlign:"right", color:"#ff5588", marginRight:"0.5em"}}>Score {totalScore}</div>
        </div>
    )
}

export default Header