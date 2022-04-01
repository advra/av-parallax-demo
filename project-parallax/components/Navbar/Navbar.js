import React from 'react';
import "../../index.css";
import { SocialIcon } from 'react-social-icons';
import logo from '../../image/avalar-icon.png';


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className='home-icon'/> 
                {/* <SocialIcon network='twitter' className='twitter-icon'/> */}
            </div>
        );
    }
}

export default Navbar;