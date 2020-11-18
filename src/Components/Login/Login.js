import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        phone: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(signedInUser);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    return (
        <div className="reg">
            <div className=" d-flex justify-content-center align-items-center">
                <div className=" w-25 border rounded-lg p-5 bg-white  login-div">
                    <h4 className="text-center">Login with</h4>
                    <button className="loginBtn btn google-loginBtn w-100" onClick={handleSignIn}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;