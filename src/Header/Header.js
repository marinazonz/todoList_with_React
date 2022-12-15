import React, { useRef, useState } from "react";

import "./Header.module.css";

const date = new Date();
const hour = date.getHours();

const Header = () => {
    const userNameInput = useRef();
    const [userName, setUserName] = useState(
        JSON.parse(localStorage.getItem("name")) || ""
    );

    const nameChangeHandler = () => {
        const enteredUserName = userNameInput.current.value;

        localStorage.setItem("name", JSON.stringify(enteredUserName));

        setUserName(enteredUserName);
        console.log(userName);
    };

    return (
        <header>
            <h1>
                Good
                {`${
                    hour >= "6" && hour < "12"
                        ? " morning"
                        : hour >= "12" && hour < "18"
                        ? " afternoon"
                        : hour >= "18" && hour < "23"
                        ? " evening"
                        : " night"
                }`}
                ,
                <input
                    ref={userNameInput}
                    type='text'
                    placeholder='write your name here'
                    value={userName}
                    onChange={nameChangeHandler}
                />
            </h1>
        </header>
    );
};

export default Header;
