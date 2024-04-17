import { Heading } from "../components/heading";
import { SubTitle } from "../components/subTitle";
import { InputFeild } from "../components/input";
import { ButtonSumit } from "../components/button";
import { Warning } from "../components/warning";

export const LogIn = ()=>{

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#ececec]">
        <div className="border bg-[#ffffff] rounded-lg">
        <div className=" mx-12  ">
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
               <InputFeild type={"email"} name={"email"} label={"Email"} placeholder={"rohitbarada@gmail.com"}/>
               <InputFeild type={"password"} name={"password"} label={"Password"}placeholder={"*******"}/>
              </div>
             
    <div className="pt-4">
             <ButtonSumit label={"Login"}/>
            </div></div>
          </div>
          <Warning text={"Don't have an account?"} button={'Sign Up'} path={"/signup"}/>
        </div>
      </div>
    </>
  );
}