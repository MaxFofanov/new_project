import React from "react";
import t from './Profileinfo.module.css'


const Profileinfo = () => {
    return (
        <div>
            <div className='app-wrapper-content'>
                <img src='https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/d4/f5/9a/562598_1000x1000.jpg'/>
            </div>
            <div className={t.diskription}>
                <div className={t.ava}>
                    <img src='https://img.freepik.com/free-vector/boy-wear-headphone-in-rainbow-round-frame-with-melody-symbols_1308-64859.jpg'/>
                </div>
                <h3> ava+discription </h3>
            </div>
        </div>



    );
}

export default Profileinfo;
