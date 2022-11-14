import t from './Header.module.css'
import React from "react";


const Header = () => {
    return (
        <header className={t.header}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'/>
        </header>
    )
};

export default Header;