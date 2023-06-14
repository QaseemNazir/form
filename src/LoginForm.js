// import React, { useState } from 'react';
// import './index.css';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation or submit the form data
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // Reset form fields
//     setUsername('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
    
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LoginForm;
