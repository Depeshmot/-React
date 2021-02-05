import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return{
        messegePage: state.messegePage
    };
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: () => {
            dispatch( sendMessageCreator() );
        },
        sendMessage: (body) => {
            dispatch( updateNewMessageBodyCreator(body) );
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;