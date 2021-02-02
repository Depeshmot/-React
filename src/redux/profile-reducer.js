const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{id: 1, message: 'Hello world'},
            {id: 2, message: 'Hy '},
            {id: 3, message: 'By'},],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_POST: 
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
    
        state.newPostText = ''
        state.posts.push(newPost);
        return state;
        
        case UPDATE_NEW_POST_TEXT: 
        state.newPostText = action.newText;
        return state;

    default: 
        return state;
    }
}

export const addPostActionCreator =  () => {
    
    return{
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    } 
}

export default profileReducer;