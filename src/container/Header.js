import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


class Header extends React.Component{
    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Subsciber</a>
                    </div>
                    {/* <div class="d-flex" role="search">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="btn btn-outline-success" aria-current="page">tdw_channel</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/queue1" className="btn btn-outline-success" aria-current="page">Queue1</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/queue2" className="btn btn-outline-success" aria-current="page">Queue2</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/queue3" className="btn btn-outline-success" aria-current="page">Queue3</Link>
                        </li>
                     </ul>
                    </div> */}
                </nav>
            </div>
        )
        
    }
}


export default Header