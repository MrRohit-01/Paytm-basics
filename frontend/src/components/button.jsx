export const ButtonSumit = ({ label,color,hover }) => {
  return (
    <>
      <div className="flex justify-center">
        <button
          type="submit"
          className={` w-96 border text-center text-sm font-medium  ${color?color :"bg-black"} ${hover}  text-white pt-2 rounded-lg pb-2 `}
        >
          {label}
        </button>
      </div>
    </>
  );
};
