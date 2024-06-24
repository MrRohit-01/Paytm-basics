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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
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
