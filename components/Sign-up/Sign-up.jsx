import React, { useState } from 'react';

import './InputField'

function SignUp() {
  // Create the amount of references, inside the useRef as we have input fields.
  const inputRefs = React.useRef([
    React.createRef(), React.createRef()
  ]);
  const [data, setData ] = React.userState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value }))
  }

  const submitForm = (e) => {
    //prevents page from reloading
    e.preventDefault();

    let isValid = true;
    // looping through the input fields from inputRefs
    for(let i = 0; i< inputRefs.current.length;i++){
      // Apply the validate function on each input field
      const valid = inputRefs.current[i].current.validate()
      // set isValid to false if it doesn't meet the requirements
      if(!valid) isValid: false;
    }
    // carry on if it's valid
    if(!isValid) return;
  }

  return (
    <div className="sign-up">
      <form onSubmit={submitForm} classname='form'>
        <h1>Pal.im Register form</h1>
        <InputField
          ref={inputRefs.current[0]}
          name='username'
          label='Username*:'
          onChange={handleChange}
          validation={"required|min:3|max:16"}
        />
      </form>
      <form action="">
        <InputField
          ref={inputRefs.current[1]}
          name='password'
          label='Password*:'
          onChange={handleChange}
          validation={"required|min:6"}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default SignUp;
