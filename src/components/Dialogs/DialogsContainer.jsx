import React from 'react';
import style from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().messegePage;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        messegePage={state}/>
    );
}

export default DialogsContainer;