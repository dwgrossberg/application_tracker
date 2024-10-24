import "./styles/pico.min.css";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import LogLink from "./components/LogLink";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import Statistics from "./pages/Statistics";
import VisualizeData from "./pages/VisualizeData";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => console.log(data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <LogLink />
        <div className="body">
          <Header />
          <Nav />
          <Routes>
            <Route exact path="" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/statistics" element={<Statistics />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/statistics/visualize"
              element={<VisualizeData />}
            />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route exact path="/login/new-account" element={<NewAccount />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
