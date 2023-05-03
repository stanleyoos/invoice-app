import Header from "./components/layout/Header/Header";
import {  Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import About from "./components/pages/About/About";
import Clients from "./components/pages/Clients/Clients";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";


function App() {
  return (
    <div className="App">
     <Header />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
