import React from 'react'
import "./Header.css"
import headerIcon from "../../assets/headerIcon.png"

const date = new Date();

export function Header() {
    return (
        <header className="site-header">
            <div className="wrapper site-header__wrapper">
                <h1 className='headerTitle'>{date.toDateString()}</h1>
                <img className='headerImage' src={headerIcon} alt="tic tac toe logo" />
                <h1 className='headerTitle'>Tic-Tac-Toe</h1>
            </div>
        </header>
    );
};