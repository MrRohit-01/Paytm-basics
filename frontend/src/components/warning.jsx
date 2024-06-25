import { Link } from "react-router-dom";
export const Warning = ({ text,button,path})=>{
  return (
    <>
        <p className="text-center pb-6">
            {text}{" "}
            <button className="underline">
              <Link to={path}>{button}</Link>{" "}
            </button>
          </p>
    </>
  )
}