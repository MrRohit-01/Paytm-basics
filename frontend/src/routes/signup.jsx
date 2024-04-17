import { Heading } from "../components/heading";
import { SubTitle } from "../components/subTitle";
import { InputFeild } from "../components/input";
import { ButtonSumit } from "../components/button";
import { Warning } from "../components/warning";
export const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#ececec]">
        <div className="border bg-[#ffffff] rounded-lg">
          <div className=" mx-12  ">
            <Heading>SIGNUP</Heading>
            <SubTitle>Enter your informatiopn to create an account</SubTitle>
          </div>

          <div className="text-lg font-semibold p-3 pt-5 pb-3 px-4">
            <div className="input-group w-full ">
              <InputFeild
                type={"text"}
                name={"firstName"}
                label={"First Name"}
                placeholder={"Rohit kumar"}
              />
              <InputFeild
                type={"text"}
                name={"lastName"}
                label={"Last Name"}
                placeholder={"Rohit kumar"}
              />
              <InputFeild
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={"rohitbarada@gmail.com"}
              />
              <InputFeild
                type={"password"}
                name={"Password"}
                label={"Password"}
                placeholder={"*******"}
              />
            </div>
          </div>

          <ButtonSumit label={"Signup"} />
          <Warning
            text={"Already have an Account? "}
            button={"Login"}
            path={"/login"}
          />
        </div>
      </div>
    </>
  );
};
