import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/OurStory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
