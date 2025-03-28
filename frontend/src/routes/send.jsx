import { useState } from "react";
import ProfileAvatar from "./profile";
import { Heading } from "../components/heading";
import { ButtonSumit } from "../components/button";
import { InputFeild } from "../components/input";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const TransferMoney = () => {
  const [amount, setAmount] = useState();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")
  const toId = searchParams.get("to")
  

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
                <ProfileAvatar
                  name={name}
                  bgColor="bg-blue-500"
                ></ProfileAvatar>
                <span className="font-semibold text-xl">{name}</span>
              </div>
              <div className="mb-4">
                <InputFeild
                  type={"number"}
                  name={"number"}
                  label={"Amount (Rs.) "}
                  placeholder={"Enter Amount"}
                  onChange={(e) => setAmount(e.target.value)}
                ></InputFeild>
              </div>
            </div>
            <div className="text-center p-5">
              <ButtonSumit
                color={"bg-[#20c45d]"}
                hover={"hover:bg-green-600"}
                onClick={response}
                label={"Initiate Transfer"}
              ></ButtonSumit>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
  async function response() {
    const responseData = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/account/transfer`,
      {
        to: toId,
        amount: Number(amount) // Ensure amount is sent as a number
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    );
    alert(responseData.data.message);
  }
};
