import React from "react";
import {GoogleLogin} from '@react-oauth/google'

export default function GoogleLogIn() {
  return <div>
    <h1>GoogleLogIn</h1>

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);

    const credential = credentialResponse.credential
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
  </div>;
}
