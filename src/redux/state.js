import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {   

        profilePage: {
            posts: [{id: 1, message: 'Hello world'},
                    {id: 2, message: 'Hy '},
                    {id: 3, message: 'By'},],
            newPostText: ''
        },
    
        messegePage: {
            dialogsData: [{ id: 1, name: 'Данил' },
                    { id: 2, name: 'Света' },
                    { id: 3, name: 'ристина' }],
    
            messageData: [{ id: 1, message: 'Hello world' },
                    { id: 2, message: 'Yo' },
                    { id: 3, message: 'What"s up' }],
            
            newMessageBody: ''
        }
        
        
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree()  {

    },
    addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.newPostText = '';
        this._state.profilePage.posts.push(newPost);
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch (action){ // {type: 'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.newPostText = '';
        this._state.profilePage.posts.push(newPost);
        this._rerenderEntireTree(this._state);
    } else if  (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.messegePage.newMessageBody = action.body;
        this._rerenderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
        let body = this._state.messegePage.newMessageBody;
        this._state.messegePage.newMessageBody = '';
        this._state.messegePage.messageData.push({id: 4, message: body});
        this._rerenderEntireTree(this._state);
    }
    
    }
};

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

export const sendMessageCreator =  () => {
    
    return{
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    } 
}



window.store = store;
export default store;
//store OOP 