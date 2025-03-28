import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./routes/signup";
import { LogIn } from "./routes/login";
import Dashboard from "./routes/dashbord";
import { TransferMoney } from "./routes/send";
function App() {
  const userName = "Rohit";
  const balance = "10000";
  const Users =[]
  return (
    <div>
      {/* GitHub logo with link */}
      <a href="https://github.com/MrRohit-01/Paytm-basics" target="_blank" rel="noopener noreferrer" style={{ position: "absolute", top: "10px", right: "10px" }}>
        <img src="../public/5847f98fcef1014c0b5e48c0.png" alt="GitHub Logo" style={{ width: "40px", height: "40px" }} />
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/dashboard" userName={userName}
          balance={balance} users={Users}
          element={<Dashboard/>}/>
          <Route path="/transfer"  element={<TransferMoney firstName={"rohit"}/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
