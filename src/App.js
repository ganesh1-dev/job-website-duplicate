/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import AllJobs from "./components/AllJobs";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MyNav />
        <Routes>
          <Route path="/AllJobs" element={<AllJobs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
