
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component{
    render(){
        return(
            <header className="header header_main">
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li><i className="fa fa-sign-out" aria-hidden="true"></i>
                        <ul>
                            <li className="logOut" onClick={this.props.logout}>Logout</li>
                        </ul>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header

