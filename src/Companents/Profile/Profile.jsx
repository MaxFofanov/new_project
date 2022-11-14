import React from "react";
import Post from "./Post/Post";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile = (props) => {


    return (
        <div>
            <Profileinfo />
            <Post posts={props.state.posts} />
        </div>


    );
}

export default Profile;
