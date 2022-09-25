import './login.css';
// import SignUp from './SignUp'
import { useEffect, useRef, useState } from 'react';
import logo from '../Images/LT_logo.png'
import { users } from '../Data/users';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import useAssignPath from './useAssignPath';
import env from "react-dotenv";
import axios from 'axios';


const Login = () => {

  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [credError, setCredError] = useState(false)
  const [credErrorString, setCredErrorString] = useState("")
  const navigator = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    // console.log(formValues.email);
    // console.log(users[0].email);
    const cookie = cookies.get("Token")
    // console.log(cookie)
    if (cookie) {
      navigator('/userlandingpage')
      return;
    }
  }, []);

  const validate = (e) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
    const regex1 = /^\S{6,12}$/;
    if (formValues.email === "") {
      // setFormErrors("Email is required.")
      setErrEmail("Email is required");
      setShowErr(true)
      setTimeout(() => {
        setFormErrors("")
        setErrEmail(false)
      }, 4000)
    }
    else if (!regex.test(formValues.email)) {
      // setFormErrors("Please enter valid email.")
      setErrEmail("Please enter valid email.")
      setShowErr(true)
      setTimeout(() => {
        setFormErrors("")
        setErrEmail(false)
      }, 4000)
    }
    else if (formValues.password === "") {
      // setFormErrors("Password is required.")
      setErrPassword("Password is required.")
      setShowErr(true)
      setTimeout(() => {
        setFormErrors("")
        setErrPassword(false)
      }, 3000)
    }
    else if ((formValues.password).length < 6 || (formValues.password).length > 12) {
      // setFormErrors("Password is required.")
      setErrPassword("Password should be (6-12) character long.")
      setShowErr(true)
      setTimeout(() => {
        setFormErrors("")
        setErrPassword(false)
      }, 3000)
    }
    else if (!regex1.test(formValues.password)) {
      setErrPassword("Please don't use white space in password.")
      setShowErr(true)
      setTimeout(() => {
        setFormErrors("")
        setErrPassword(false)
      }, 3000)
    }
    else {
      axios.post(`${env.API_URI}/login`, { email: formValues.email, password: formValues.password })
        .then((res) => {
          cookies.set("Token", res.data.data.token,
            {
              secure: true,
              maxAge: 3660
            }
          )
          cookies.set("username", res.data.data.username,
            {
              secure: true,
              maxAge: 3660
            }
          )
          cookies.set("email", res.data.data.email,
            {
              secure: true,
              maxAge: 3660
            }
          )
          // console.log(res.data.data);
          window.location.reload();
        })
        .catch((err) => {

          if (err.response.status === 401) {
            setCredErrorString("Incorrect credentials.")
            setCredError(true)
            setTimeout(() => {
              setCredError(false);
              setCredErrorString("");
            }, 3000)
          } else {
            setCredErrorString("Internal server error.")
            setCredError(true)
            setTimeout(() => {
              setCredError(false);
              setCredErrorString("");
            }, 3000)
          }
        })
    }
  }


  return (
    <>
      <div className='u_mainBody'>
        <div className='u_mainHeading'>Online Test</div>
        <div className='u_loginPage'>
          <section className='a'>
            <div className="container">

              <div className="user signinBx">
                <div className="imgBx"><img className={{ backgroundSize: 'cover' }} src={logo} alt="" /></div>
                <div className="formBx">
                  <form>
                    <h2>Sign In</h2>
                    <div className='u_email_holder'>
                      <input type="text" name="email" id="email" placeholder="Email-ID" value={formValues.email} onChange={(e) => { setFormValues({ ...formValues, email: e.target.value }) }} />
                    </div>
                    <span className='u_show_message'>{errEmail}</span>
                    <div className='u_email_holder'>
                      <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => { setFormValues({ ...formValues, password: e.target.value }) }} />
                    </div>
                    <span className='u_show_message'>{errPassword}</span>
                    <div className='u_email_holder'>
                      <input type="button" id='u_loginButton' name="" onClick={(e) => { validate(e); }} value="Login" />
                    </div>

                  </form>
                </div>
              </div>

              {/* <SignUp/> */}
            </div>
            {/* {
            showErr
            ?
              <div className='error-message'>
                <div className='error-title'>{formErrors}</div>
                <div className='close-btn' onClick={()=>{setShowErr(false)}}><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24"  transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg></div>
              </div>
            :
              null
          } */}


          </section>
        </div>

      </div>
      <div className='u_mainBodyResponsive'>
        <h1>This Website is not supported in Mobile.</h1>
      </div>
      {
        credError ?
          <div style={{ position: 'fixed', backgroundColor: '#262626', color: 'white', right: '15px', bottom: '10px', padding: '10px' }}>
            <span>
              {credErrorString}
            </span>
          </div>
          :
          null
      }

    </>
  )
}

export default Login;

