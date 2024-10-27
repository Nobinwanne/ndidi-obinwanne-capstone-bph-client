import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import Footer from "./components/Footer.jsx";
import ListingsPage from "./pages/ListingsPage.jsx";
import LotCheckerPage from "./pages/LotCheckerPage.jsx";
import AddListing from "./pages/AddListingPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/lotchecker" element={<LotCheckerPage />} />
          <Route path="/addlisting" element={<AddListing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
