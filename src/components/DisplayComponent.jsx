import React, { useState } from 'react';

const DisplayComponent = (props) => {
    console.log(props);

    const [age, setAge] = useState (props.age);

    const increaseAgeHandler = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <h3>First Name: {props.firstName}</h3>
            <h3>Last Name: {props.lastName}</h3>
            <h3>Age: {age}</h3>
            <p></p>
            <button onClick = {(e) => {
                increaseAgeHandler()
            }}>Happy Birthday!</button>
            <hr />
        </div>
    )

}

export default DisplayComponent;