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
                        <NavLink className="link_style" to ='/pages/home' exact 
                        activeStyle={
                                {borderTop: 'solid 3px #cb2d6f'}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link_style" to ='/pages/stats' exact 
                            activeStyle={
                                    {borderTop: 'solid 3px #cb2d6f'}}>
                            Stats</NavLink>
                    </li>
                    <li>
                        <NavLink className="link_style" to ='/pages/gallery' exact 
                            activeStyle={
                                    {borderTop: 'solid 3px #cb2d6f'}}>
                            Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink className="link_style" to ='/pages/dedication' exact 
                            activeStyle={
                                {borderTop: 'solid 3px #cb2d6f'}}>
                        Dedication</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
}

export default Header;