import React from 'react';
import style from '../LastMessege/LastMessege.module.css';

const UserName = (props) => {
    return (
        <div className={style.title}>
            <a>{props.name}</a>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            <a>{props.message}</a>
        </div>
    )
}

const Data = (props) => {
    return (
        <div className={style.data}>
            <a>{props.data}</a>
        </div>
    )
}


const LastMessege = () => {
    return (
        <div className={style.container}>
            <div className={style.flex_container}>
                <UserName name='Данил Данилов'/>
                <Data data='15 april'/>
            </div>
            <div className={style.messege_container}></div>
                <Message className={style.message} message='В девятнадцать ноль-ноль бортового времени я спустился по металлическим ступенькам в капсулу. В ней было ровно столько места, чтобы поднять локти. Я вставил наконечник шланга в штуцер, выступающий из стены, скафандр раздулся, и я уже не мог сделать ни малейшего движения. Стоял, вернее висел, в воздушном ложе, составляя единое целое с металлической скорлупой.
                Подняв глаза, я увидел сквозь выпуклое стекло стены колодца и выше – лицо склонившегося над ним Моддарда. Потом лицо исчезло и стало темно – это наверху закрыли тяжелый предохранительный конус. Послышался восьмикратно повторенный свист электромоторов, которые дотягивали болты, потом писк воздуха в амортизаторах. Глаза привыкали к темноте. Я уже различал зеленоватый контур универсального указателя.'/>
            
        </div>
    );
}

export default LastMessege;