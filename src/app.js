import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { LoginAuntification } from "./adminComponent/login";
import "./assets/style/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/admin/*" element={<>AdminPanel</>} />
        <Route path="/auth/*" element={<LoginAuth />} />
      </Routes>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>Home</>} />
      </Routes>
      <Footer />
    </>
  );
}

function LoginAuth() {
  return (
    <Routes>
      <Route path="/login" element={<LoginAuntification />} />
    </Routes>
  );
}

export default App;
