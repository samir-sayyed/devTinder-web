import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import LogIn from "./LogIn";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
