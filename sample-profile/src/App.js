import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
const App = () => {
  const [userName, setUserName] = useState("آریوبرزن");
  const [email, setEmail] = useState("Abdi.eb79@gmail.com");
  return (
    <div>
      <NavBar userName={userName} setUserName={setUserName} />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
          <Dashboard
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
          />
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 w-100"></div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
