import {useNavigate} from 'react-router-dom';
import { Heading } from "../components/heading";
import { SubTitle } from "../components/subTitle";
import { InputFeild } from "../components/input";
import { ButtonSumit } from "../components/button";
import { Warning } from "../components/warning";
import { useState } from "react";
import axios from "axios"
export const SignUp = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [password,setPassword] = useState("")
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#ececec]">
        <div className="border bg-[#ffffff] rounded-lg ">
          <div className=" sm:mx-12 ">
            <Heading>SIGNUP</Heading>
            <SubTitle>Enter your informatiopn to create an <br/> account</SubTitle>
          </div>

          <div className="text-lg font-semibold px-4">
            <div className="input-group w-full ">
              <InputFeild
                type={"text"}
                name={"firstName"}
                label={"First Name"}
                placeholder={"Rohit kumar"}
                onChange={e=>setFirstName(e.target.value)}
                
              />
              <InputFeild
                type={"text"}
                name={"lastName"}
                label={"Last Name"}
                placeholder={"Rohit kumar"}
                onChange={e=>setLastName(e.target.value)}
              />
              <InputFeild
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={"rohitbarada@gmail.com"}
                onChange={e=>setEmail(e.target.value)}
              />
              <InputFeild
                type={"password"}
                name={"Password"}
                label={"Password"}
                placeholder={"*******"}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
          </div>
        
          <ButtonSumit label={"Signup"} onClick={HandlerSignup}/>
      
          <Warning
            text={"Already have an Account? "}
            button={"Login"}
            path={"/login"}
           
          />
        </div>
      </div>
    </>
  );




  
  async function HandlerSignup(){
    const response =await axios.post("http://localhost:3000/api/v1/user/signup",{
      firstName,
      lastName,
      email,
      password
      
    });
    if(response.data.token){
    localStorage.clear();
    navigate("/dashboard")
    localStorage.setItem("token",response.data.token)
  }
  else{
    alert(response.data.msg)
  }
}
};
