import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./Nav";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Home } from "./Home";
import { Profile } from "./Profile";

function App() {
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Nav user={user} setToken={setToken} setUser={setUser} />}
        >
          <Route
            path="/"
            element={
              <Home
                user={user}
                token={token}
                setToken={setToken}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login setToken={setToken} setUser={setUser} token={token} />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <Profile
                token={token}
                user={user}
                setUser={setUser}
                setToken={setToken}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
