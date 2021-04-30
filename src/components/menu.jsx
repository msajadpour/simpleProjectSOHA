import React, { Component } from 'react';
import MenuLogo from '../assets/image/menu.png'
import Logo from '../assets/image/logo.png'
class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="menu">
                <div className="humberger">
                    <img src={MenuLogo} />
                    <p>menu</p>
                </div>
                <div>
                    <img src={Logo} />
                </div>
            </div>
         );
    }
}
 
export default Menu;