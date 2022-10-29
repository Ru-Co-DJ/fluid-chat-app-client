import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Theme from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Auth from "./pages/Auth/Auth";
import Missing from "./pages/Missing/Missing";
import Rooms from "./pages/Rooms/Rooms.jsx"
import Profile from "./pages/Profile/Profile";
import Learn from "./pages/Learn/Learn";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div>
      <Theme>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/rooms" element={<Rooms />}/>
          <Route path="/auth/login" element={<Auth />}/>
          <Route path="/auth/signup" element={<Auth/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/learn" element={<Learn />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
