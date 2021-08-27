import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
          <Dashboard />
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 w-100"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
