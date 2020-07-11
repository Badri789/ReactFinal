import React, {useContext, useEffect, useState} from "react";
import GoRestServiceContext from "../goRest-service-context/goRest-service-context";
import { connect } from "react-redux";
import classes from "./posts.css";
import { postsLoaded } from "../../store/actions";

const Posts = ({ posts, postsLoaded }) => {

    const goRestService = useContext(GoRestServiceContext);

    useEffect(() => {
        goRestService.getPosts()
            .then(response => {
                postsLoaded(response.data.result);
            });
    }, []);


    const renderPosts = posts.map(post => {
        return (
            <div className="card mb-3" key={post.id}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.user_id}</p>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        );
    });

    return (
        <div className={classes["post-page"]}>
            {renderPosts}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
       posts: state.posts
    };
}

const mapDispatchToProps = {
    postsLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

