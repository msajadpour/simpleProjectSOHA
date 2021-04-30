import React from "react";
import Down from "../assets/image/down.png";
import Menu from "./menu";
const Header = () => {
    return (
        <div className="parentHeader">
            <div className="header">
                <ul className="mainNav">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Tickets</a>
                    </li>
                    <li>
                        <a href="#">Tables</a>
                    </li>
                    <li>
                        <a href="#">Socials</a>
                    </li>
                    <li>
                        <a href="#">Results</a>
                    </li>
                    <li>
                        <a href="#">Fitures</a>
                    </li>
                    <li className="showDrop">
                        <a href="#">Your Club</a>
                        <img className="down" src={Down} />
                        <div className="dropDown">
                            <ul>
                                <li>
                                    <a href="/searchCountries" >Soccer</a>
                                </li>
                                <li>
                                    <a href="/searchCountries" >Tennis</a>
                                </li>
                                <li>
                                    <a href="/searchCountries" >Bascketball</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <Menu />
        </div>
    );
};

export default Header;
