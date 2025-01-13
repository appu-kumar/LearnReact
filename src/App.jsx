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
import { lazy, Suspense } from "react";
import { UserContext } from "./utils/UserContext";

// lazy loading
// dynamic bundling
// code spliting
// chunking
// all are same ok
// bundler will make different js file for this compoenent ok
// when this compoent will be called then it will load, like clicking on the Grocery in Header comp.
const Grocery = lazy(() => import("./components/Grocery")); // if grocery is big componenet then do this thing

const App = () => {
  return (
    <>
      <UserContext.Provider value={{ username: "Rakesh" }}>
        <Header />
      </UserContext.Provider>
      <UserContext.Provider value = {{username:"routing"}}>
        <Outlet />
      </UserContext.Provider>
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
          <Route path="/restaurant/:resId" element={<Restaurant />} />{" "}
          {/* dynamic routing     */}
          <Route
            path="/grocery"
            element={
              <Suspense fallback={<p>Loading....</p>}>
                <Grocery />
              </Suspense>
            }
          ></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppRouter />); // it compares virtual dom and real dom   basically it converts React Element into HTML Element
