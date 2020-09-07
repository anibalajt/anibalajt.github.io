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
              className="App-gh-pages -b master -d build-img"
              alt="Andres Jarava"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFFH7lRNFcCYQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=f4vO0kZGBVxYboXP_VVTwyXyVHwHHFW6Un74xRHJ9Bo"
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
      <Instagram />
    </div>
  );
};

export default App;
