import React, {useState} from "react";
import { fetchRegister } from "../api/fetch"

export const ViewRegister = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register">
            <h1>Create your WERKIT account!</h1>
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