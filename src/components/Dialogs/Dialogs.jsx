import React from 'react';
import style from '../Dialogs/Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem.jsx';
import Message from '../Dialogs/Message/Message.jsx';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().messegePage;

    let dialogsElements = state.dialogsData.map( dialogsData => <DialogItem name={dialogsData.name} id={dialogsData.id}/>);
    let messagesElements = state.messageData.map( messageData => <Message message={messageData.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

    return (
        <div className={style.container}>
            <div className={style.items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;