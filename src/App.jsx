import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />{" "}
      {/* This will be replace by children component of the App      */}
      <Footer />
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/restaurant/:resId" element={<Restaurant />} />      {/* dynamic routing     */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppRouter />); // it compares virtual dom and real dom   basically it converts React Element into HTML Element
