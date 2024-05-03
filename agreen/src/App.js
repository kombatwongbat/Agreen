import "./App.css";
import "./Variables.css";
import NavBar from "./components/NavBar/NavBar.js";


import {
  HomePage,
  ReasonPage,
  TeamPage,
  PrivacyPage,
  ProductPage,
  AutomationPage,
  SecurityPage,
  BuyPage
} from "./components/index.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Reason" element={<ReasonPage />} />
            <Route exact path="/Team" element={<TeamPage />} />
            <Route exact path="/Design" element={<PrivacyPage />} />
            <Route exact path="/Product" element={<ProductPage />} />
            <Route exact path="/Automation" element={<AutomationPage />} />
            <Route exact path="/Security" element={<SecurityPage/>} />
            <Route exact path="/BuyNow" element={<BuyPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
