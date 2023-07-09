import React from 'react';
import {Link} from "react-router-dom";
import '../Styles/Navbar.css';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#" to="/">Mango</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="/members">Members</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="/members">Turneringar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" to="/members">Resultat</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
