import React from 'react';
import NavItems from '../../components/Navbar/NavItems'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Navbar.css'


const Navbar = (props) => (
    <header className='Navbar'>
        <div className='NavigationItem'>
            <NavLink to="/">Dashboard</NavLink>

            <NavLink to="/matters">Menu Button Later On</NavLink>
            <button onClick={props.createMatter}>Create New Matter</button>
        </div>
    </header>
    
)

export default Navbar;