import React, { useState, useEffect } from "react";
import InstagramPhotos from "./fetchInstagramPhotos";
import "./Instagram.css";
const _handleKeyDown = (e, setUsername_instagram) => {
  if (e.key === "Enter") {
    setUsername_instagram(e.target.value);
  }
};

const Instagram = () => {
  const [Photos, setPhotos] = useState([]);
  const [Username_instagram, setUsername_instagram] = useState("anibalajt");
  useEffect(() => {
    async function fetchData() {
      console.log("fetchData");
      const response = await InstagramPhotos(Username_instagram);
      if (response.length > 0) {
        console.log("response :", response);
        setPhotos(response);
      }
    }
    fetchData();
  }, [Username_instagram]);
  console.log("Username_instagram :", Username_instagram);
  let contentPhotos = [];
  return (
    <section className="Instagram">
      <input
        className="Instagram_search"
        type="text"
        autoCapitalize="none"
        placeholder="search on Instagram"
        onKeyDown={(e) => _handleKeyDown(e, setUsername_instagram)}
      />
      {Photos &&
        Photos.map(({ displayUrl }, key) => {
          if ((key + 1) % 3 == 1) {
            contentPhotos = [];
          }
          contentPhotos.push(
            <div key={key}>
              <div>
                <div>
                  <img src={displayUrl}></img>
                </div>
              </div>
            </div>
          );
          if ((key + 1) % 3 === 0) {
            return <div key={key}>{contentPhotos}</div>;
          }
        })}
    </section>
  );
};

export default Instagram;
