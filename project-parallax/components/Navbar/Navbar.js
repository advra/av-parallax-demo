import React from "react";
import logo from "../../image/avalar-icon.png";
import "../../index.css";

class Navbar extends React.Component {
    render() {
        return (
            <img src={logo} className="home-icon"/> 
        );
    }
}

export default Navbar;