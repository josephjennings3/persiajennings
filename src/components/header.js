import React, { Component } from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom';



class Header extends Component {
    render() {
      return (
        <div className="header">
            <div className= "title"> 
                <h1>Persia Jennings</h1>
            </div>
            <div className="header_list">
                <ul>
                    <li>
                        <NavLink to ='/pages/home' exact 
                        activeStyle={
                                {borderTop: 'solid 3px #000'}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/pages/stats' exact 
                            activeStyle={
                                    {borderTop: 'solid 3px #000'}}>
                            Stats</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/pages/gallery' exact 
                            activeStyle={
                                    {borderTop: 'solid 3px #000'}}>
                            Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/pages/dedication' exact 
                            activeStyle={
                                {borderTop: 'solid 3px #000'}}>
                        Dedication</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
}

export default Header;