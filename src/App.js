import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import Profile from "./Components/Form/Profile";
import { ToastContainer, toast } from "react-toastify";
import defaultAvatar from "./assets/img/default-profile-picture.jpg";

const App = () => {
  const [userName, setUserName] = useState(sessionStorage.getItem("user-name"));
  const [fullName, setFullName] = useState(sessionStorage.getItem("full-name"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [profileAvatar, setProfileAvatar] = useState(
    !sessionStorage.getItem("profileAvatar")
      ? defaultAvatar
      : sessionStorage.getItem("profileAvatar")
  );

  const saveAvatar = (chosenAvatar) => {
    setProfileAvatar(chosenAvatar);
    sessionStorage.setItem("profileAvatar", chosenAvatar);
  };
  return (
    <div className="App">
      <NavBar userName={userName} setUserName={setUserName} />
      <div className="row p-5">
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3">
          <Dashboard
            profileAvatar={profileAvatar}
            setProfileAvatar={setProfileAvatar}
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
          />
        </div>
        <div className="col-xl-10 col-lg-9 col-md-9 col-sm-9 col-9">
          <Profile
            fullName={fullName}
            setFullName={setFullName}
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            profileAvatar={profileAvatar}
            setProfileAvatar={setProfileAvatar}
            saveAvatar={saveAvatar}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
