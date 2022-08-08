import React from 'react'
import styles from '../LoginPage.module.css';

export default function LoginButton(props: any) {
  return (
    <div className={styles.googleContainer} onClick={props.loginOnClick}>
        <img src={props.image} alt={props.alt}/>
        <p>Login with {props.name} </p>
    </div>
  )
}
