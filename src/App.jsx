import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeHeroSection from "./Pages/Home Pages/HomeHeroSection";
import Home2 from "./Pages/Home Pages/Home2";
import Home3 from "./Pages/Home Pages/Home3";
import Home4 from "./Pages/Home Pages/Home4";
import Home5 from "./Pages/Home Pages/Home5";
import Home6 from "./Pages/Home Pages/Home6";
import Home7 from "./Pages/Home Pages/Home7";
import Home8 from "./Pages/Home Pages/Home8";
import Home9 from "./Pages/Home Pages/Home9";
import ContactUs from "./Pages/Contact Us Pages/ContactUs";
import AboutUs from "./Pages/About Us Pages/AboutUs";
import AboutUs2 from "./Pages/About Us Pages/AboutUs2";
import AboutUs3 from "./Pages/About Us Pages/AboutUs3";
import AboutUs4 from "./Pages/About Us Pages/AboutUs4";
import HeroServices from "./Pages/Services Pages/HeroServices";
import Services3 from "./Pages/Services Pages/Services3";
import Services2 from "./Pages/Services Pages/Services2";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <HomeHeroSection />
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
                <Home6 />
                <Home7 />
                <Home8 />
                <Home9 />
              </>
            }
          />

          {/* Services Page */}
          <Route
            path="/Blog"
            element={
              <>
                <HeroServices />
                <Home7 />
                <Services3 />
                <Services2 />
                <Home9 />
              </>
            }
          />

          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Contact Us Page */}
          <Route path="/contactUs" element={<ContactUs />} />

          {/* <Route path="/author" element={<AuthorPage />} /> */}

          <Route
            path="/aboutUs"
            element={
              <>
                <AboutUs /> <AboutUs2 /> <AboutUs3 /> <AboutUs4 /> <Home9 />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
