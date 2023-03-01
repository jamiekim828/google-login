import React from "react";
import axios from 'axios'
import {GoogleLogin} from '@react-oauth/google'

export default function GoogleLogIn() {
  return <div>
    <h1>GoogleLogIn</h1>

<GoogleLogin
  onSuccess={async (credentialResponse) => {
    console.log(credentialResponse);
    // send credential to backend - axios.post - /user/login-google
    const url = 'http://localhost:8002/user/login-google'
    const credential = credentialResponse.credential
    const response = await axios.post(url, {id_token: credential})
    if (response.status === 200) {
      console.log(response, 'axios post response')
      // response.data : 
      // {token: 'need this token for later', userData: {_id, email, firstName}}
    } else {
      alert('Login failed')
    }
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  </div>;
}
