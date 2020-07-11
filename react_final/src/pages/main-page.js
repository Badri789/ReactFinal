import React from "react";
import Register from "../components/register/register";
import Posts from "../components/posts/posts";
import { connect } from "react-redux";

const MainPage = ({ isAuthenticated }) => {

    const pageContent = isAuthenticated ? <Posts /> : <Register />;

    return (
        <div>
            {pageContent}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

export default connect(mapStateToProps)(MainPage);