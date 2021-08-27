import "./Dashboard.css";

import defaultAvatar from "../../assets/img/default-profile-picture.jpg";
import { useState } from "react";
import { BsCardText } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { BiStar } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BiIdCard } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
const Dashboard = ({
  userName,
  setUserName,
  email,
  setEmail,
  profileAvatar,
  setProfileAvatar,
}) => {
  const [dashboardItems, setDashboardItems] = useState([
    { id: 1, title: "درخواست‌ها", src: <BsCardText /> },
    { id: 2, title: "تراکنش مالی", src: <IoWalletOutline /> },
    { id: 3, title: "امتیاز‌ها و نظرات", src: <BiStar /> },
    { id: 4, title: "اعلان ها", src: <BsBell /> },
    { id: 4, title: "تکمیل حساب کاربری", src: <BiIdCard /> },
    { id: 4, title: "خروج", src: <IoExitOutline /> },
  ]);
  return (
    <div className="dashboard">
      <div className="personal-info row">
        <div className="dashboard-avatar col-xl-7 col-lg-8 col-md-9 col-sm-10">
          <img
            className="dashboard-avatar"
            src={profileAvatar}
            alt="profile avatar"
          />
        </div>
        <div className="info col-xl-5 col-lg-4 col-md-3 col-sm-2">
          <h5>{userName}</h5>
          <p className="dashboard-email">{email}</p>
        </div>
      </div>
      <ul className="options">
        {dashboardItems.map((item) => {
          return (
            <div className="dashboard-li" key={item.id}>
              <div className="row d-flex justify-content-center align-items-center dashboard-item">
                <div className="icon col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 align-items-center ">
                  {item.src}
                </div>
                <li className="col-xl-10 xol-lg-10 col-md-9 col-sm-8 col-7">
                  {item.title}
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
