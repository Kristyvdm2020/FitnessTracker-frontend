import React, {useState} from "react";
import { registerUser } from "../../src/api/fetch";


export const ViewRegister =  () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register">
            <h1>Register</h1>
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
    <button disabled ={!username || !password}>Login</button>
</form>
        </div>
    )

}