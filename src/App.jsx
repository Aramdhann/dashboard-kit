import { Route, Routes } from "react-router-dom";
import Home from "pages/Home.jsx";
import Login from "pages/Login.jsx";
import Ticket from "pages/Ticket.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tickets" element={<Ticket />} />
      </Routes>
    </>
  );
}

export default App;
