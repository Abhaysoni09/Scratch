import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Nav from "./component/Nav";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App