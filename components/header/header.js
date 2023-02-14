import React, {useState} from "react";
import { registerUser } from "../../src/api/fetch";


export const ViewRegister = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={async(ev) => { 
        try {
            ev.preventDefault();
            const token = await fetchRegister(username, password);
            setToken(token);

            // const redirectlogin = () => {
            // }

            // Will redirect to home route when it is added later ^^^

        } catch (error) {
            console.error(error);
        }
    }}>
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
    <button disabled ={!username || !password}>Login</button>
</form>
        </div>
    )
}

export const ViewLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (

<div className="login">
    <h1>Login</h1>
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