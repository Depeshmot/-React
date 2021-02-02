const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [{ id: 1, name: 'Данил' },
            { id: 2, name: 'Света' },
            { id: 3, name: 'ристина' }],

    messageData: [{ id: 1, message: 'Hello world' },
            { id: 2, message: 'Yo' },
            { id: 3, message: 'What"s up' }],
    
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 4, message: body});
            return state;

        default:
            return state;
    }        
};

export const sendMessageCreator =  () => {
    
    return{
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    } 
};

export default dialogsReducer;