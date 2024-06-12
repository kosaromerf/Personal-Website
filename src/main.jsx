import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";

const routeVariants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const navigationMove = {
  in: { y: 0, opacity: 1 },
  out: { y: 5, opacity: 0 },
};

const transition = {
  duration: 0.3,
  delay: 0.5,
};

const transition2 = {
  duration: 0.3,
  delay: 0.2,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/skills"
          element={
            <PageWrapper>
              <Skills />
            </PageWrapper>
          }
        />
        <Route
          path="/work"
          element={
            <PageWrapper>
              <Work />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <>
    <motion.div
      variants={routeVariants}
      initial="out"
      animate="in"
      exit="out"
      transition={transition}
      style={{ flexGrow: 1 }}
    >
      {children}
    </motion.div>
    <motion.div
      variants={navigationMove}
      initial="out"
      animate="in"
      exit="out"
      transition={transition2}
      style={{ flexGrow: 1 }}
    >
      <Navigation />
    </motion.div>
  </>
);

const App = () => (
  <div className="app-container">
    <AnimatedRoutes />
    <Contact />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

// Ensure createRoot is only called once
if (!window._root) {
  window._root = ReactDOM.createRoot(document.getElementById("root"));
}

window._root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
