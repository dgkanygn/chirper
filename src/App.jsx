import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Modal } from "./components/Modal";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const isOpen = false;

  return (
    <>
      <Router>
        {isOpen && <Modal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
}

export default App;
