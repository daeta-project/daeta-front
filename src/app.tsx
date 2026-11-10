import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatbotProfile from "./pages/ChatbotProfile";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Chatroom from "./pages/Chatroom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/ChatbotProfile" element={<ChatbotProfile />} />
        <Route path="/Chatroom" element={<Chatroom />} />
      </Routes>
    </>
  );
}

// Login->Test->Home->Propfile->Chatroom
//                  ->Mypage
