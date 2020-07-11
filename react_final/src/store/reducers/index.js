const initialState = {
    isAuthenticated: false,
    posts: [],
    photos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: true,
            };
        case 'USER_LOGGED_OUT':
            return {
                ...state,
                isAuthenticated: false,
            };
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload
            };
        case 'PHOTOS_LOADED':
            return {
                ...state,
                photos: action.payload
            };
        default:
            return state;
    }
}

export default reducer;