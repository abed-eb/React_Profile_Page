import { useState } from "react";
import styles from "./NavBar.module.css";
// import logo from "../../../assets/icons/image002.jpg";
const NavBar = () => {
  const [navBarItems, setNavBarItems] = useState([
    { id: 1, title: "چطور کار می‌کند؟" },
    { id: 2, title: "قوانین و مقررات" },
    { id: 3, title: "سوالات پرتکرار" },
    { id: 4, title: "درباره ما" },
  ]);
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>{/* <img alt="logo" src={logo} /> */}</div>
      <div className={styles.items}>
        {navBarItems.map((item) => {
          return <h4 key={item.id}>{item.title}</h4>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
