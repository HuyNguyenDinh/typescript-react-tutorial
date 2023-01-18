import { useState } from "react";

export type LoggedInProps = {
    isLoggedIn?: boolean
}

export const LoggedIn = (props: LoggedInProps) => {

    const [isLoggedIn, setLoggedIn] = useState(false)

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>
                User is {isLoggedIn ? 'logged in' : 'logged out'}
            </h1>
        </div>
    )
}