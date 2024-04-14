import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./routes/signup";
import { SignIn } from "./routes/signin";
import { Dashboard } from "./routes/dashbord";
import { Send } from "./routes/send";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signup" element={<SignIn/>}/>
          <Route path="/signup" element={<Dashboard/>}/>
          <Route path="/signup" element={<Send/>}/>
  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
