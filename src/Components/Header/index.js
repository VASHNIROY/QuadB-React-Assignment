import { Component } from 'react';

import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


class Header extends Component{
    state = {hamburger: false}
    toggleHamburger = () => {
        this.setState(prevState => ({hamburger: !prevState.hamburger}))
    }

    renderOptions = () => (
            <div className='mbl-options-conatiner'>
                <p>Register</p>
                <p>Login</p>
                <Link className="link-style-header" to="/"><p>Home</p></Link>
            </div>
    )

    render(){
        const {hamburger} = this.state
        return(
            <nav className="nav-container">
                    <ul className="nav-un-ordered-list">
                    <Link className="link-style-header" to="/"><img alt="tvmazelogo" className="tv-maze-img" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1685692523/Screenshot_439_gikf1n.png" /></Link>
                        <Link className="link-style-header" to="/"><li className='home-btn d-none d-md-flex'>Home</li></Link>
                        <div className="search-bar-container">
                            <input placeholder="Search title" type="text" className="search-bar" />
                            <AiOutlineSearch className="search-icon" />
                            <FaBars className='d-md-none'  onClick={this.toggleHamburger}/>
                            
                        </div>
                        <li className='register-btn d-none d-md-flex'>Register</li>
                        <li className='login-btn d-none d-md-flex'>Login</li>
                    </ul>
                    {hamburger ? this.renderOptions(): null}
                </nav>
        )
    }
}


export default Header

