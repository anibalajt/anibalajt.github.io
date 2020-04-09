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
              className="App-profile-img"
              alt="Andres Jarava"
              src="https://instagram.fper8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/80780901_2660126430761500_1053006361845039104_n.jpg?_nc_ht=instagram.fper8-1.fna.fbcdn.net&amp;_nc_ohc=LgSrCXIrnNcAX_9td3s&amp;oh=1c9f37a30df5cd9cdd177ee0c6168c15&amp;oe=5EB06777"
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
