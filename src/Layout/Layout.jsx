
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from "../components/Header";
import NoPage from "../components/NoPage";
import Home from "../pages/Home";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
