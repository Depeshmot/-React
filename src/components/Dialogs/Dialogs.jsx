import React from 'react';
import style from '../Dialogs/Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem.jsx';
import Message from '../Dialogs/Message/Message.jsx';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map( dialogsData => <DialogItem name={dialogsData.name} id={dialogsData.id}/>);
    let messagesElements = props.messageData.map( messageData => <Message message={messageData.message}/>);

    return (
        <div className={style.container}>
            <div className={style.items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                
            </div>
        </div>
    );
}

export default Dialogs;