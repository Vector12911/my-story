import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [counter, setcounter] = useState(0);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const show = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }
    return (
        <>
            <div style={{ "display": "grid", "placeItems": "center" }}>
                <button onClick={(e) => setcounter(counter + 1)}>Increment</button>
                {counter}
                <button onClick={(e) => setcounter(counter - 1)}>Decrement</button>
            </div>
            <form >
                <input type="text" placeholder='username' onChange={(e) => setusername(e.target.value)} />
                <input type="text" placeholder='password' onChange={(e) => setpassword(e.target.value)} />
                <button onClick={(e) => show(e)}>sumit</button>
            </form>
        </>

    )
}

export default Test
