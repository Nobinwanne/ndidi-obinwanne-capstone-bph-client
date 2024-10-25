import "./App.css";
import Layout from "./components/Layout.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/listings" element="ListingsPage" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
