export const SignUp = ()=>{
 return <>
   <div className="container">
        <h2>Sign Up</h2>
        <form action="signup.php" method="post">
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required/>
            </div>
            <div className="input-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.php">Login</a></p>
    </div>
 </>
}