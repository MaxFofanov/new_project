import React from "react";
import t from './Post.module.css'
import PostOne from "./Post 1/PostOne";


const MyPost = (props) => {


    let postElement = props.posts.map(m => (<PostOne massage={m.message} LikeCounte={m.likesCount}/>));

    return (
        <div className={t.post}>
            <div>
                <h3> My Post </h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div className={t.newpost}>
                <button> NewPost</button>
            </div>
            <div className={t.textmess}>
                {postElement}
            </div>
        </div>

    )
}

export default MyPost;
