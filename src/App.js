

import React from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";

import About from "./components/About";

import Contact from "./components/Contact";

import Registration from "./components/registration";
import Signup from "./components/Signup";



function App() {



    return (

        <>
            <BrowserRouter>


                <nav class="navbar navbar-expand-sm bg-dark">
                    <div class="container-fluid">
                         

                            <h5 style={{paddingRight:40,color: "white"}}> ABC Corp.</h5>

                         
                        <button style={{ color: "white" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon bg-warning"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NavLink to="/" style={({ isActive }) => ({

                                        color: isActive ? 'greenyellow' : 'white'
                                    })}>

                                        <h5 style={{paddingRight: 30}}>Home</h5>

                                        </NavLink>
                                </li>
                                <li class="nav-item">
                                    
                                    <NavLink to="/about" style={({ isActive }) => ({

                                        color: isActive ? 'greenyellow' : 'white'
                                    })}>
                                         
                                        <h5 style={{ paddingRight: 30 }}>About</h5>  
                                      
                                    </NavLink>
                                    
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/registration" style={({ isActive }) => ({

                                        color: isActive ? 'greenyellow' : 'white'
                                    })}>

                                        <h5 style={{ paddingRight: 30 }}>Registration</h5>

                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/signup" style={({ isActive }) => ({

                                        color: isActive ? 'greenyellow' : 'white'
                                    })}>

                                        <h5 style={{ paddingRight: 30 }}>Signup</h5>

                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>

                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/about" element={<About />} />

                    <Route exact path="/registration" element={<Registration />} />

                    <Route exact path="/signup" element={<Signup />} />

                </Routes>
            </BrowserRouter>

        </>

    );
}



export default App;
