import './User.css';
import { useState } from 'react';

function User() {
    let [name, setName] = useState('Ofosu');

    function changeName() {
        setName('Manuel');
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>
            Click Name
            </button>
        </div>
    )
}

export default User;