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
  const [sortedApps, setSortedApps] = useState({});

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

  // Post data to statistics microservice to get response
  const postData = async (data) => {
    if (data) {
      try {
        console.log(data);
        const response = await fetch(
          `https://application-statistics-5963b0807a64.herokuapp.com/statistics`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(`Information posted.`, data);
          setSortedApps(data);
        } else {
          const errMessage = await response.json();
          console.log(
            `Unable to edit information: ${response.status}. ${errMessage.Error}`
          );
        }
      } catch (e) {
        if (!(e instanceof Error)) {
          e = new Error(e);
        }
        console.error(e.message);
      }
    }
  };

  useEffect(() => {
    postData(totalApps);
  }, [totalApps]);

  useEffect(() => {
    setApplications(sortedApps["Applications"]);
    setOAs(sortedApps["OA"]);
    setInterviews(sortedApps["Interview"]);
    setTopCompanies(sortedApps["Company"]);
    setTopPositions(sortedApps["Position"]);
    setTopLocations(sortedApps["Location"]);
  }, [sortedApps]);

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
