import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import StoreLocator from "./Components/StoreLocator/StoreLocator";
import Nav from "./Components/Navbars/Nav";
import Franchise from "./Components/FranchiseEnquiry/Franchise";
import Green from "./Components/lastgreenbackground/Green";
import Last from "./Components/Last/last";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<StoreLocator />}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
          <Route path="/franchise" element={<Franchise/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Green />
        <Last/>
      </BrowserRouter>
    </div>
  );
}

export default App;
