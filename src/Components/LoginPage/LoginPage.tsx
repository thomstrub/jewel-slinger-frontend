import React from "react";
import googleimage from "../../assets/google-image.jpeg"
import instagramimage from '../../assets/Instagram-Logo.wine.svg';
import githubimage from '../../assets/github.jpg';
import twitterimage from '../../assets/twitterlogo.png';
import styles from './LoginPage.module.css';
import LoginButton from "./LoginComponents/LoginButton";

export default function LoginPage(){

    const googleLogin = () => {
        window.open("https://jewel-slinger-backend.herokuapp.com/login/google", "_self");
        console.log("google firing<--------")
    }

    const instagramLogin = () => {
        window.open("https://jewel-slinger-backend.herokuapp.com/login/instagram", "_self");
        console.log("instagram firing<--------")
    }

    const githubLogin = () => {
        window.open("https://jewel-slinger-backend.herokuapp.com/login/github", "_self");
        console.log("github firing<--------")
    }
    const twitterLogin = () => {
        window.open("https://jewel-slinger-backend.herokuapp.com/login/twitter", "_self");
        console.log("twitter firing<--------")
    }

    return(
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <LoginButton name="Google" alt="Google Icon" image={googleimage} loginOnClick={googleLogin} />
                <LoginButton name="Instagram" alt="Instagram Icon" image={instagramimage} loginOnClick={instagramLogin} />
                <LoginButton name="GitHub" alt="GitHub Icon" image={githubimage} loginOnClick={githubLogin} />
                <LoginButton name="Twitter" alt="Twitter Icon" image={twitterimage} loginOnClick={twitterLogin} />
            </div>
        </div>
    )
       
       
}