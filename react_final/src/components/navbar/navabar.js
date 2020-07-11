import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./navbar.css";
import { userLoggedOut } from "../../store/actions";

const Navbar = ({ userLoggedOut, isAuthenticated }) => {

    const logoutHandler = () => {
        userLoggedOut();
    }

    const authUser = isAuthenticated ? null : (
        <React.Fragment>
            <li className="nav-item">
                <Link to="/authorize" className="nav-link">Authorize</Link>
            </li>
        </React.Fragment>
    );

    const authFeatures = isAuthenticated ?
        (
            <React.Fragment>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/photos" className="nav-link">Photos</Link>
                </li>
                <li className="nav-item" onClick={logoutHandler}>
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            </React.Fragment>
        ) : null;


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand" href="#">FinalApp</Link>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Main</Link>
                    </li>
                    {authUser}
                    {authFeatures}
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

const mapDispatchToProps = {
    userLoggedOut
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

