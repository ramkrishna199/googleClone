import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../../components/search/Search";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Image</p>
          <AppsIcon />
          <Avatar className="avator" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="/"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
        <div className="language">
          <p>
            Google offered in:{" "}
            <span>
              हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
            </span>
          </p>
        </div>

        <div className="footer">
          <div className="location">India</div>
          <div className="footer__body">
            <div className="footer__left">
              <p>About</p>
              <p>Advertising</p>
              <p>Business</p>
              <p>How Search works</p>
            </div>
            <div className="footer__right">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
