import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { SignUp } from "./routes/signup";
import { SignIn } from "./routes/signin";
import Dashboard from "./routes/dashbord";
import { Send } from "./routes/send";
function App() {
  const userName = "Rohit";
  const balance = "10000";
  const Users =[]
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" userName={userName}
          balance={balance} users={Users}
          element={<Dashboard/>}/>
          <Route path="/send" element={<Send/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
