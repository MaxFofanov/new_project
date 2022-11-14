import React from "react";
import t from './../Dialog.module.css'


const MassegId = (props) => {
    return (
        <div className={t.dialog}>
            {props.message}
        </div>
    );
}

export default MassegId;