import React from 'react'
const ScreenLayout = (props) => {
    return (
        <>
            <div style={{
                width: '100%',
                position: "absolute",
                height: "100%",
                background: "url('/assets/back_machine.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "fill",
                backgroundPosition: "top center",
                zIndex: 0,
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <div style={{
                    width: "500px",
                    maxWidth: "95%",
                    height: "90%",
                    position: "absoute",
                    backgroundColor: "#333",
                    border: "0.4em solid #f53e5e",
                    fontFamily: 'Handjet',
                    fontSize: '3em',
                    color: '#FFFFFF',
                }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ScreenLayout