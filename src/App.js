import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import More from "./components/More";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";
import Posts from "./components/Post";
import { ThemeContext, themes } from "./context/themeContext";
import React, { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState(themes.dark);

  function handleOnClick() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <div
          style={{
            display: "flex",
            width: "100vw",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "60%" }}>
            <Router>
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/more" element={<More />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </Router>
          </div>
          <div style={{ marginRight: "30px", marginTop: "20px" }}>
            <Posts theme={theme} />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
