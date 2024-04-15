export const SignIn = ()=>{
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#7f7f7f]">
        <div className="border bg-[#ffffff] rounded-lg">
        <div className=" mx-12  ">
          <h2 className="text-center pt-8 text-4xl font-bold ">Sign In</h2>
          <h3 className="text-center text-lg">
            Enter your credentials to access your
            <br /> account
          </h3>
          </div>
          <div className=" p-3 pt-10 pb-5 px-4">
            <form
              action="signup.php"
              method="post"
              className="text-lg font-semibold"
            >
            
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <br />
                <div className="py-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="rohitkumarbarada@gmail.com"
                  className="border-2 rounded-lg w-full p-2 text-lg font-medium"
                  required
                /></div>
              </div>
              <div className="input-group pb-4">
                <label htmlFor="password">Password</label>
                <br />
                <div className="pt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                  className="border-2 rounded-lg w-full  p-2 text-lg font-medium"
                  required
                /></div>
              </div>

              <button
                type="submit"
                className="w-full border text-center text-sm bg-black text-white pt-1.5 rounded-lg pb-1.5"
              >
                Sign Up
              </button>
            </form>
          </div>
          <p className="text-center pb-6">
            Don't have an account? <button className="underline">Sign Up</button>
          </p>
        </div>
      </div>
    </>
  );
}