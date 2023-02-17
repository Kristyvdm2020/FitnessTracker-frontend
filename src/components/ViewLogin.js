import React, {useState} from "react";


export const ViewLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (

<div className='body-container' id="login">
    <h1>Login to WerkIT</h1>
    <form>
        <input
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            />
        <input
            placeholder="password"
            type={'password'}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            />
            
        <button disabled ={!username || !password}>Log In</button> 
        {/* Grays out button if there is no input ^^^^ */}

    </form>
</div>
        )};