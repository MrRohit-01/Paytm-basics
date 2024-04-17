import React from "react";
import ProfileAvatar from "./profile";
import { Heading } from "../components/heading";
import { ButtonSumit } from "../components/button";
import { InputFeild } from "../components/input";

export const TransferMoney = ({firstName}) => {
  return (
    <div className=" h-svh flex justify-center items-center bg-[#ececec]">
      <div className="flex justify-between items-center bg-dark rounded-xl border  bg-[#ffffff] ">
        <div className=" ">
          <div>
            <div className=" mx-32 my-10">
              <Heading>Send Money</Heading>
            </div>
            <div className="px-7">
              <div className="flex items-center mb-4 gap-5  ">
                <ProfileAvatar name={firstName} bgColor="bg-blue-500"></ProfileAvatar>
                <span className="font-semibold text-xl">{firstName}</span>
              </div>
              <div className="mb-4">
              <InputFeild type={"number"} name={"number"} label={"Amount (Rs.) "} placeholder={"Enter Amount"}></InputFeild>
              </div>
            </div>
            <div className="text-center p-5">
             <ButtonSumit color={"bg-[#20c45d]"} hover={"hover:bg-green-600"} label={"Initiate Transfer"}></ButtonSumit>
            </div>
            
            
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
