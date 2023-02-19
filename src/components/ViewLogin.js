import React, {useState} from "react";
import { loginUser } from "../api/fetch";

export const ViewLogin = (props) => {
    const { setUser } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({});


    return (

<div className='form-card' id="login">
    <h1>Login to WerkIT</h1>
    <form onSubmit={async(ev) => {
        
        try {
            ev.preventDefault();
            const response = await loginUser(username, password);
            if(!response.error) {
                window.localStorage.setItem('token', response.token);
                setMessage({ message: 'Login successful!'});
                setUser(response.user);
                const redirecthome = () => {
                    window.location.href = '/#/';
                }
                redirecthome();
            } else {
                setMessage(response);
            } 
        }
        catch (error){
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
        <button className="btn" disabled ={!username || !password}>Log In</button> 
        {message.message && <p>{message.message}</p>}
        {/* Grays out button if there is no input ^^^^ */}

    </form>
</div>
        )};