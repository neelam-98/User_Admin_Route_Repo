import React from "react";
import {Link} from "react-router-dom";
import "./route.css";

 function Home(){
    return(
        <>
        <header>
         
            <nav className="navbar">
                {/* <ul> */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/User'>User</Link></li>
                    <li><Link to='/Admin'>Admin</Link></li>

                    
                {/* </ul> */}
            </nav>
        </header>
        <hr/>
        <h4>Click on User link for User login</h4>
        <h4>Click on Admin link for Admin login</h4>
        </>

    );
 }
 export default Home;