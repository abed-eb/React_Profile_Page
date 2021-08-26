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
    <div className="navBar">
      <div className="logo w-100">
        <img alt="logo" src={logo} />
      </div>
      <div className="row menu">
        <div className="items col-xl-8 col-lg-6 col-md-7 col-sm-8 col-7">
          {navBarItems.map((item) => {
            return (
              <a href="#" key={item.id}>
                {item.title}
              </a>
            );
          })}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-2 name">
          <div className="row">
            <span className="col-2 align-items-center">
              <CgProfile />
            </span>
            <span className="col-10 d-flex justify-content-center align-items-center">
              {userName}
            </span>
          </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-2 col-sm-1 col-3 notification">
          <BsBell size={25} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
