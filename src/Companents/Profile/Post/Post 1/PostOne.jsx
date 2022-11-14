import React from "react";
import t from './PostOne.module.css'


const PostOne = (props) =>{
    return (
        <div>
            <div>
                <img  className={t.item} src='https://www.m24.ru/b/d/nBkSUhL2gFUlnsiwPqzJrMCqzJ3w-pun2XyQ2q2C_2OZcGuaSnvVjCdg4M4S7FjDvM_AtC_QbIk8W7zj1GdwKSGT_w=p-foTA_Np4Uc0QT_2ImTpQ.jpg'/>
                {props.massage}
            </div>
            <span>
                {props.LikeCounte}
            </span>
        </div>
    )
}

export default PostOne ;