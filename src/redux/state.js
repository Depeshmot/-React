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
                    { id: 3, message: 'What"s up' }]
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
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.newPostText = '';
        this._state.profilePage.posts.push(newPost);
        this._rerenderEntireTree(this._state);
    } else if  (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._rerenderEntireTree(this._state);
    }
    
    }
};

window.store = store;
export default store;
//store OOP