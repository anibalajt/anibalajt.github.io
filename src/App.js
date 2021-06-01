import React from "react";
import HeaderEditor from "./header/headerEditor";
import Instagram from "./instagram/index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="width-wrapper">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/anibalajt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ borderRadius: "100%", height: "150px" }}
              className="App-gh-pages -b master -d build-img"
              alt="Andres Jarava"
              src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/146239578_2210777019054103_2117667323048716222_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=I6qz2bkCG3sAX9qRd_F&tn=vE7CKiqEN6VxoJYZ&_nc_ht=scontent-syd2-1.xx&oh=c5d35291e81dea2f0deb60ef22b0694a&oe=60DA27AF"
            />
          </a>
          {/* <span className="App-identity">Javascript Developer</span> */}
          <h1>
            Hi, you found me! I am a Javascript Developer from Colombia.
            Currently living in Perth, Australia
          </h1>
        </div>
        <HeaderEditor />
      </header>
      {/* <Instagram /> */}
    </div>
  );
};

export default App;
