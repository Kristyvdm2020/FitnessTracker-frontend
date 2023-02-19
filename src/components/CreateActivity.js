import React, {useState} from "react";
import { createActivity, fetchAllActivities } from "../api/fetch";

export const CreateActivity = (props) => {
const { setActivities } = props;
const [name, setName] = useState('')
const [description, setDescription] = useState('');
const [message, setMessage] = useState({});

    const newActivity = async (ev) => {
        ev.preventDefault();
        const response = await createActivity(name, description);
        if (!response.error) {
            const allActivities = await fetchAllActivities;
            setActivities(allActivities);
            clearForm();
            setMessage({message: "Success!"});
        } else {
            // console.log(error)
            setMessage(response);
        }
    }

    const clearForm = () => {
        setName('');
        setDescription('');
    }

    return (
        <div className="form-card">
            <h1>Tell us about your activity!</h1>
            <form onSubmit={newActivity}>

                <input placeholder="name" value={name} onChange={(ev) =>
                    setName(ev.target.value)}></input>

                <input placeholder="description" value={description} onChange={(ev) =>
                    setDescription(ev.target.value)}></input>

                <button className="btn" type="submit">New Activity</button>
            </form>
            {message.message && <p>{message.message}</p>}
        </div>
    )
}