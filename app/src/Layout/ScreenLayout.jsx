import React from 'react'
const ScreenLayout = (props) => {
    return (
        <div style={{
            width: '100%',
            position: "absolute",
            height: "100%",
            background: "url('/assets/screen.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 95%",
            backgroundPosition: "top center",
            fontFamily: 'Handjet',
            fontSize: '2em',
            color: '#FFFFFF'
        }}>
            <div style={{ width: '23%', height: "60%", position: "absolute", marginLeft:"38%", marginTop:"14%"}}>
                {props.children}
            </div>
        </div>
    )
}

export default ScreenLayout