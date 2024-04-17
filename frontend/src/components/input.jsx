export const InputFeild = ({type,name,label,placeholder})=>{
  return <>
      <label htmlFor={name}>{label}</label>
                <br />
                <div className="py-2">
                <input
                  type={type}
                  id={name}
                  name={name}
                  placeholder={placeholder}
                  className="border-2 rounded-lg w-full p-2 text-lg font-medium"
                  required
                /></div>
  </>
}