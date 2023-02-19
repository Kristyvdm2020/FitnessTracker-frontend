import React, {useState} from "react";
import { registerUser } from "../api/fetch"

export const ViewRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({});

    return (
        <div className='form-card' id="register">
            <h1>Create your WERKIT account!</h1>
            <form onSubmit={async (ev) => {
                try {
                    ev.preventDefault();
                    const response = await registerUser(username, password);
                    console.log(response);
                    if(!response.error) {
                        window.localStorage.setItem('token', response.token);
                        setMessage({ message: 'Login successful!'});
                        setUser(response.user);
                        const redirecthome = () => {
                            window.location.href = '/home';
                        }
                        redirecthome();
                    } else {
                        setMessage(response);
                    }
                } catch (error) {
                    console.error(error);
                }
            }}>
                <input
                    placeholder="username"
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                />
                <p />
                <input
                    placeholder="password"
                    type={'password'}
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <p />
                <button className="btn" disabled={!username || !password}>Create Account</button>
            </form>
            {message.message && <p>{message.message}</p>}
        </div>
    )
}