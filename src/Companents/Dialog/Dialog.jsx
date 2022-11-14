import React from "react";
import t from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./MessagId/MessegId";


const Dialog = (props) => {




    let dialogsElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messages.map(m => <Massage message={m.message}/>);

    return (
        <div className={t.dialogs}>
            <div className={t.dialogItems}>
                {dialogsElement}
            </div>
            <div className={t.messeges}>
                {messageElement}
            </div>

        </div>


    );
}

export default Dialog;