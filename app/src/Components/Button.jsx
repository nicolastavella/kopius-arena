import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, children,...rest}) => {
    const [hover, setHover] = useState(false);

    return (
        <Link to={to} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
            width: "95%",
            display: "block",
            border: "0.2em solid #FFF",
            color: "#FFF",
            backgroundColor: hover ? "#f53eAA" : "#f53e5e",
            textDecoration: "none",
            textAlign: "center"
        }} {...rest}>{children}</Link>
    )
}

export default Button