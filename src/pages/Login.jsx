import React, { useState } from "react";
import '../css/Login.css'
import userIcon from '../assets/form/person.png'
import emailIcon from '../assets/form/email.png'
import passwordIcon from '../assets/form/password.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

 const [action, setAction] = useState("Sign Up");
 let [pwdshow, setpwdshow] = useState(false);
 let [userdata, setuserdata] = useState([]);
 let [form, setform] = useState(
  {
   name: "",
   email: "",
   pwd: "",
  }
 );


 let handleChange = (e) => {
  setform({ ...form, [e.target.name]: e.target.value });
 }
 

 let submitSignUP = (e) => {
  console.log(userdata);
  e.preventDefault();

  if (form.name !== "" && form.email !== "" && form.pwd !== "") {
   if (!/^[A-Za-z\s]+$/.test(form.name)) {
    toast.error("Name must only contain alphabets and spaces.");
    return;
   }
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(form.email)) {
    toast.error("Please enter a valid email address.");
    return;
   }
   if (form.pwd.length <= 5) {
    toast.error("Password must be more than 5 characters.");
    return;
   }
   const duplicateEntries = userdata.filter((user) => user.email === form.email);
   if (duplicateEntries.length > 0) {
    toast.error("Email are already exists.");
    return;
   }
   setuserdata([...userdata, form]);
   toast.success("Form submitted successfully");
   setform({
    name: "",
    email: "",
    pwd: "",
   });
  }
  else {
   toast.error("Please fill out all fields.");
  }
 }


 let submitLogin = (e) => {
  console.log(userdata);
  e.preventDefault();
  if (form.email !== "" && form.pwd !== "") {
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(form.email)) {
    toast.error("Please enter a valid email address.");
    return;
   }
   if (form.pwd.length <= 5) {
    toast.error("Password must be more than 5 characters.");
    return;
   }
   const duplicateEntries = userdata.filter((user) => user.email === form.email);
   if (duplicateEntries.length > 0) {
    toast.error("Email are already exists.");
    return;
   }
   setuserdata([...userdata, form]);
   toast.success("Registration Successfully done");
   setform({
    email: "",
    pwd: "",
   });
  }
  else {
   toast.error("Please fill out all fields.");
  }
 }


 return (
  <>
   <ToastContainer />
   <form className='container'>
    <div className='header'>
     <div className='text'>{action === "Sign Up" ? "Create account" : "Login"}</div>
     <div className='underline'></div>
    </div>
    <div className='inputs'>
     <p>Please {action === "Sign Up" ? "SignUp" : "Login"} to book appointment</p>

     {action === "Sign Up" && <div className='input'>
      <img src={userIcon} alt="user-icon" />
      <input type="text" placeholder="Full name" maxlength="15" value={form.name} name='name' onChange={handleChange} />
     </div>
     }
     <div className='input'>
      <img src={emailIcon} alt="email-icon" />
           <input type="email" placeholder="Email address" value={form.email} name='email' onChange={handleChange}  />
     </div>

     <div className='input'>
      <img src={passwordIcon} alt="pwd-icon" />
           <input type={(pwdshow) ? 'text' : 'password'} placeholder="Password" value={form.pwd} name='pwd' onChange={handleChange}  />
      <button id="showHide"
      onClick={() => setpwdshow(!pwdshow)}> {(pwdshow) ? 'Hide' : 'Show'}</button> <br /><br />
     </div>
    </div>


    <div className='create-account'>
     <div className="btn-create-account">
      {action === "Sign Up" ?
       <button onClick={submitSignUP}>Create account</button> :
       <button onClick={submitLogin}>Login</button>
      }
     </div>
    </div>
    {
     action === "Sign Up"
      ? <p id="alreadyAccount">Already have an account? <span onClick={() => setAction("Login")}>Login here</span></p>
      : <p id="alreadyAccount">Create a new account <span onClick={() => setAction("Sign Up")}>Click here</span></p>
    }

   </form>
  </>
 )
}

export default Login
