const userAuthenticated = () => {
    return {
        type: 'USER_AUTHENTICATED'
    };
}

const userLoggedOut = () => {
    return {
        type: 'USER_LOGGED_OUT'
    };
}

const postsLoaded = (posts) => {
    return {
        type: 'POSTS_LOADED',
        payload: posts
    };
}

const photosLoaded = (photos) => {
    return {
        type: 'PHOTOS_LOADED',
        payload: photos
    };
}

export {
    userAuthenticated,
    userLoggedOut,
    postsLoaded,
    photosLoaded
}

