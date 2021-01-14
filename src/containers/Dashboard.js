import React from 'react';
import NavBar from '../components/Navbar/NavBar'
import { NavLink } from 'react-router-dom';



const Dashboard = (props) => ( 

    <div>
        <h2>My Dashboard Page</h2>
        
            <p><NavLink to="/matters">My Matters</NavLink></p>
            <p><NavLink to="/tasks">Tasks</NavLink></p>
        
           {/* <h3>Tasks Link</h3> */}
        {/* <h3>Calendar Link</h3>
        <h3>Billings Link</h3> */}
    </div>

)


export default Dashboard;