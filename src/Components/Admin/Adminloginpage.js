import user_icon from './Images/user-circle-regular.svg'
import password_icon from './Images/unlock-alt-solid.svg'
import './Admin.css'
import { useState } from "react";
function Adminloginpage(message)
{
    const [showErr, setShowErr] = useState(false);
    const [userName, setUserName] = useState("");
    const [password,setPassword]= useState("");
    const [passworderror,setPasswordShowErr] = useState(false);
    const catchError = () => {
        const regex = /^[a-zA-Z0-9]+$/;          
         if(userName === "")
            {
                setShowErr(true)
                console.log("empty username not allowed")
            }
            else if(!regex.test(password))
            {
                setShowErr(true)
                console.log("no special Character allowed")
            }
            else
            {
                setShowErr(false)
            }
       

    }
    const catchErrorPassword = () => {
        console.log("hello, I am in catch error password")
        if(password === "")
        {
            setPasswordShowErr(true)
            console.log("enter password")
        }
        // else if(!regex.test(password))
        // {
        //     setPasswordShowErr(true)
        // }
        else
        {
            setPasswordShowErr(false);
            // console.log("done");
        }
   

}
    return(
        <>
   {/* <div className='login'> */}
        <div className="login_box">
            <div className="login">
                <span className="loginText">Login</span>
            </div>
            <div>
            <label className="box">
                <span className="username">Username</span>
                <input
                    className="username_input"
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) =>{setUserName(e.target.value);      
                    }}
                    autoComplete='current-username'
                />

                <img className="user_icon" src={user_icon} alt="User_icon" />
            </label>
            {
                !showErr
                ?
                    null
                :
                    <span className='Error'> Enter valid Username</span>
            }
            <label className="box">
                <span className="password">Password</span>
                <input
                    className="password_input"
                    type="password"
                    placeholder="••••••••••"
                    value={password}
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <img className="password_icon" src={password_icon} alt="password Icon"/>
            </label>
            {
                !passworderror
                ?
                    <span className='Error'> </span>
                :
                    <span className='Error'> Enter valid Password</span>
            }
            <div className="box">
                <button className="signin_btn" type="button" onClick={(e)=>{catchError(e);catchErrorPassword(e)}}>Sign In</button>
            </div>
            
        </div>
            
        </div>
        {/* </div> */}
        </>
    )

}
export default Adminloginpage;