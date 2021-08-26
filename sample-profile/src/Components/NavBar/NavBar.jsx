import { useState } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/icons/image002.jpg";
import { CgProfile } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
const NavBar = () => {
  const [navBarItems, setNavBarItems] = useState([
    { id: 1, title: "چطور کار می‌کند؟" },
    { id: 2, title: "قوانین و مقررات" },
    { id: 3, title: "سوالات پرتکرار" },
    { id: 4, title: "درباره ما" },
  ]);

  const [userName, setUserName] = useState("آریوبرزن");
  return (
    <div className="navBar row">
      <div className="logo col-xl-3 col-lg-3 col-md-">
        <img alt="logo" src={logo} />
      </div>
      <div className="items col-xl-6 col-lg-6 col-md-8">
        {navBarItems.map((item) => {
          return (
            <a href="#" key={item.id}>
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="details col-xl-3 col-lg-3 col-md-2">
        <div className="row detail w-100">
          <div className="col name">
            <div className="row">
              <span className="col-2">
                <CgProfile />
              </span>
              <span className="col-10 d-flex justify-content-center">
                {userName}
              </span>
            </div>
          </div>
          <div className="col notification">
            <BsBell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
