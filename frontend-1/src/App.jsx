import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login"
import Userdetails from "./components/Userdetails";
const App = () => {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="Userdetails" element={<Userdetails/>} />
      </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App