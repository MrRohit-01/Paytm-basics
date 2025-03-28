import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Heading } from "../components/heading";
import { SubTitle } from "../components/subTitle";
import { InputFeild } from "../components/input";
import { ButtonSumit } from "../components/button";
import { Warning } from "../components/warning";
import axios from "axios";

export const LogIn = ()=>{
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#ececec]">
        <div className="border bg-[#ffffff] rounded-lg ">
        <div className=" sm:mx-12  ">
         <Heading>LOGIN</Heading>
          <SubTitle>
            Enter your credentials to access your account
          </SubTitle>
          </div>
          <div className=" p-3 pt-10 pb-5 px-4">
            <div
              className="text-lg font-semibold"
            >
            
              <div className="input-group">
              
                <InputFeild type={"email"} name={"email"} label={"Email"} placeholder={"rohitbarada@gmail.com"} onChange={e=>setEmail(e.target.value)} />
               <InputFeild type={"password"} name={"password"} label={"Password"}placeholder={"*******"} onChange={e=>setPassword(e.target.value)}/>
              </div>
             
    <div className="pt-4">
             <ButtonSumit label={"Login"} onClick={HandlerLogin}/>
            </div></div>
          </div>
          <Warning text={"Don't have an account?"} button={'Sign Up'} path={"/signup"}/>
        </div>
      </div>
    </>
  );
  async function HandlerLogin(){
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`, {
      email,
      password
    });
   


    
    if(response.data.token){
      navigate("/dashboard")
      localStorage.setItem("token",response.data.token)
      alert(response.data.msg)

    }
    else{
      alert(response.data.msg)
    }
  }
}