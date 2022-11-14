import React from "react";
import t from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={t.dialog + ' ' + t.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
export default DialogItem;