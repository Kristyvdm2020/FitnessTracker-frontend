import React, {useState} from "react";
import { registerUser } from "../api/fetch"

export const ViewRegister = ({setToken}) => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='body-container' id="register">
            <h1>Create your WERKIT account!</h1>
            <form onSubmit={async(ev) => { 
        try {
            ev.preventDefault();
            const token = await registerUser(username, password);
           setToken(token);
           console.log('register success');
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
    <button disabled ={!username || !password}>Create Account</button>
</form>
        </div>
    )
}