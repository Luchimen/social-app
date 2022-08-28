// import React from 'react'

// export const RegisterPage = () => {
//   return (
//     <div>RegisterPage</div>
//   )
// }

import { useState } from 'react';

export const RegisterPage = () => {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>USARIO {name} REGISTRO EXITOSO</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>INGRESAR DATOS</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>User Registration</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="input-container">Nombre</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="input-container">Contraseña</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />

<label className="input-container"> Repetir Contraseña</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />

<div  onClick={handleSubmit} className="button-container">
          <input type="submit"  value="Registrar"/>
        </div>
{/* <button onClick={handleSubmit} className="btn" type="submit">
Submit
</button> */}

</form>
</div>
);
}