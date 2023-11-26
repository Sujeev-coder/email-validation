import React, { useState } from 'react'
import {auth} from "./firebase"
const Userauth = () => {

    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const { email, password } = data;

    const changeHandler = e => {

        setdata({ ...data, [e.target.name]: e.target.value })
     
    }

    const signUpHandler = e =>{

        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(user =>console.log(user)).catch(err =>console.log(err))

    }

    const signInHandler = e =>{

        e.preventDefault();

    }

    return (
        <div>

            <center>

                <h2>User Authentication</h2>

                <form>

                    <input type='email' name='email' autoComplete='off' value={email} onChange={changeHandler} placeholder='Email' /><br></br>
                    <input type='password' name='password' value={password} onChange={changeHandler} placeholder='Password' /><br></br>
                    <button onClick={signUpHandler}>SignUp</button><button onClick={signInHandler}>SignIn</button>
                </form>


            </center>

        </div>
    )
}

export default Userauth