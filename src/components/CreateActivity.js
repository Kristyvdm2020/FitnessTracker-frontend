import React, {useState} from "react";
import { createActivity } from "../api/fetch";

export const CreateActivity = () => {

const [name, setName] = useState('')
const [description, setDescription] = useState('');

    return (
        <div className="form-card">
            <h1>Tell us about your activity!</h1>
            <form onSubmit={async (ev) => {
                try {
                    ev.preventDefault();
                    createActivity(name, description);
                } catch (error) {
                    console.error(error);
                }
            }}>

                <input placeholder="name" value={name} onChange={(ev) =>
                    setName(ev.target.value)}></input>

                <input placeholder="description" value={description} onChange={(ev) =>
                    setDescription(ev.target.value)}></input>

                <button className="btn" type="submit">New Activity</button>
            </form>
        </div>
    )
}