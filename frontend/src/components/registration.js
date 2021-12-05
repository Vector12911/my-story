import React, { useState } from 'react'
import axios from 'axios';
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link, NavLink } from 'react-router-dom';
import swal from 'sweetalert';


const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_psw, setConfirm_psw] = useState('');

    const [user, setUser] = useState({});

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

    function check_password() {
        var password = document.getElementById("psw").value;
        var x = document.getElementById("psw_chk");
        // console.log(password)
        if (password.length < 8) {
            x.innerHTML = 'poor'
            x.style.color = 'yellow';
        }
        else {
            x.innerHTML = 'strong'
            x.style.color = 'green';
        }
    }

    function check_repassword() {
        var repassword = document.getElementById("psw-repeat").value;
        var password = document.getElementById("psw").value;
        var x = document.getElementById("repsw_chk");
        console.log(password)
        if (password.length > 0 && repassword == password) {
            x.innerHTML = 'matched'
            x.style.color = 'green';
        }
        else {
            x.innerHTML = 'password and confirm password is not matching'
            x.style.color = 'red';
        }
    }

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
      })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth,email,password);
            console.log(user);
            swal("Hurrayy!", "you are logged in", "success")
                .then(() => {
                    window.location='/login';
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
                        <h3 class="card-title">Register</h3>
                        <p className="d-flex align-items-center">
                        Already have an account? 
                            <Link to="/login" class="font-weight-bold ">Login</Link>
                        </p>
                    </div>
                    <form class="form">
                        <div class="card-body">
                            <div class="form-group form-group-last">

                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="Email.."
                                id="email"
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                                onKeyUp={check_email}
                                 />
                                 <span id="email_chk"></span>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password.."
                                id="psw"
                                required
                                onChange={(e) => { setPassword(e.target.value) }}
                                onKeyUp={check_password} 
                                 />
                                 <span id='psw_chk'></span>
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" placeholder="Confirm Password.." 
                                id="psw-repeat"
                                required
                                onChange={(e) => { setConfirm_psw(e.target.value) }}
                                onKeyUp={check_repassword}
                                />
                                <span id="repsw_chk"></span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="reset" class="btn btn-primary mr-2" onClick={register}>Register</button>
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
