import React, { useState } from 'react'
import axios from 'axios';
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import swal from 'sweetalert';
import { Redirect,Route} from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const check_email = () => {
        const email = document.getElementById("email").value;
        var x = document.getElementById('email_chk');
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(email) === false) {
            // console.log(x);
            x.innerHTML = 'enter a valid email'
            x.style.color = 'red';
        }
        else {
            x.innerHTML = ''
        }
    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            swal("Hurrayy!", "you are logged in", "success")
                .then(() => {
                    window.location='/';
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex justify-content-center mt-30">
            <div class="col-md-4">
                <div class="card card-custom gutter-b example example-compact">
                    <div class="card-header">
                        <h3 class="display-5 card-title">Login</h3>
                    </div>
                    <form class="form">
                        <div class="card-body">
                            <div class="form-group form-group-last">

                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="Email.."
                                    id="email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    onKeyUp={check_email}
                                />
                                <span id="email_chk"></span>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password.."
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="reset" class="btn btn-primary mr-2" onClick={login}>login</button>
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
