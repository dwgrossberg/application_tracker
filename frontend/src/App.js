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
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState(internships);
  const [rows, setRows] = useState(150);
  const [totalApps, setTotalApps] = useState([]);
  const [applications, setApplications] = useState(0);
  const [OAs, setOAs] = useState(0);
  const [interviews, setInterviews] = useState(0);
  const [topCompanies, setTopCompanies] = useState([]);
  const [topPositions, setTopPositions] = useState([]);
  const [topLocations, setTopLocations] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const sortApps = (totalApps, item) => {
    const freq = {};
    for (const app of totalApps) {
      let elem = app[item];
      if (item === "position" || item === "company" || item === "location") {
        elem = elem.trim();
      }
      if (freq[elem]) {
        freq[elem]++;
      } else {
        freq[elem] = 1;
      }
    }
    const sortedFreq = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return sortedFreq;
  };

  useEffect(() => {
    fetch("/api/internships")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        const dataToKeep = data.filter((item) => item["remove"] === false);
        const sortedDataToKeep = dataToKeep.sort((a, b) => {
          return b["date-posted"].localeCompare(a["date-posted"]);
        });
        setInternships(sortedDataToKeep);
        setFilteredInternships(sortedDataToKeep);
      });
  }, []);

  useEffect(() => {
    setTotalApps(
      filteredInternships.filter((item) => item["applied"] === true)
    );
  }, [filteredInternships]);

  useEffect(() => {
    setApplications(totalApps.length);
    setOAs(
      totalApps.filter((item) => item["online-assessment"] === true).length
    );
    setInterviews(
      totalApps.filter((item) => item["interview-round"] !== null).length
    );
    setTopCompanies(sortApps(totalApps, "company"));
    setTopPositions(sortApps(totalApps, "position"));
    setTopLocations(sortApps(totalApps, "location"));
  }, [totalApps]);

  return (
    <div className="App">
      <HashRouter>
        <LogLink loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} />
        <div className="body">
          <div id="top"></div>
          <Header />
          <Nav
            internships={internships}
            setFilteredInternships={setFilteredInternships}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  internships={internships}
                  filteredInternships={filteredInternships}
                  setFilteredInternships={setFilteredInternships}
                  setInternships={setInternships}
                  rows={rows}
                  setRows={setRows}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/statistics"
              element={
                <Statistics
                  applications={applications}
                  OAs={OAs}
                  interviews={interviews}
                  topCompanies={topCompanies}
                  topPositions={topPositions}
                  topLocations={topLocations}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/statistics/visualize"
              element={<VisualizeData totalApps={totalApps} />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <Login
                  setLoggedIn={setLoggedIn}
                  email={email}
                  setEmail={setEmail}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/login/new-account"
              element={<NewAccount email={email} setEmail={setEmail} />}
            />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
