import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../asset/image/logo.svg';
import bell from '../asset/image/bell.svg';
import mail from '../asset/image/envelope.svg';
import chat from '../asset/image/chat-dots.svg';
import menu from '../asset/image/dots-menu.svg';
import logout from '../asset/image/logout-circle.svg';
import search from '../asset/image/search.svg';
import pro_pik from '../asset/image/image-fill.svg';

export default class _header extends Component {
    render() {
        return (
            <header>
                <div className="header-wrap">                
                <ul className="menu-left">
                <img className="logo" alt="" src={logo} />
                    <li><Link to="/">  Home </Link></li>
                    <li><Link to="/soc"> Question</Link></li>
                    <li><Link to="/"> Collaboration</Link></li>
                    <li><Link to="/">Jobs</Link></li>
                    <li><Link to="/"> My Circle</Link></li>
                </ul>
                <ul className="menu-right">
                    <li> <img className="profile-img" alt="" src={pro_pik} />  </li>
                    <li><img alt="" src={bell} /> <span>5</span> </li>
                    <li><img alt="" src={mail} /> <span>10</span> </li>
                    <li><img alt="" src={chat} /> <span>12</span> </li>
                    <li><img alt="" src={menu} /> </li>
                    <li><img alt="" src={logout} /> </li>
                    <li><img alt="" src={search} /> </li>
                </ul>
              </div>
            </header>
        )
    }
}
