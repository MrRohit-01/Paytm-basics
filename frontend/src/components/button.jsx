export const ButtonSumit = ({ label,color,hover,onClick }) => {
  return (
    <>
      <div className="flex justify-center ">
        <button
          type="submit"
          className={` w-96 border max-sm:w-11/12 text-center text-sm font-medium  ${color ||"bg-black"} ${hover}  text-white pt-2 rounded-lg pb-2 `}
           onClick={onClick}
        >
          {label}
        </button>
      </div>
    </>
  );
};
