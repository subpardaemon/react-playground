import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

class Navigator extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/sithlords">Sith Lords</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigator;