import React from "react";
import t from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (

        <nav className={t.nav}>
            <div className={t.item}>
                <NavLink to="/profile" activeClassName={t.active}>Profile</NavLink>
            </div>
            <div>
                <div className={`${t.item} ${t.active}`}>
                    <NavLink to="/dialogs" activeClassName={t.active}>Messeges</NavLink>
                </div>
                <div div className={t.item}>
                    <NavLink to="/news" activeClassName={t.active}>News</NavLink>
                </div>
                <div div className={t.item}>
                    <NavLink to="/music" activeClassName={t.active}>Music</NavLink>
                </div>
            </div>


        </nav>


    );
}

export default Navbar;

