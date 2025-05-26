import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { projectTypes } from "../data";
import { LandingPage, PortfolioPage, Website } from "../pages";

export default function AllRoutes({ colorScheme, toggleColorScheme }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}/>}>
          <Route
            index
            element={
              <Website
              />
            }
          />
          {projectTypes.map((type) => (
            <Route
              key={type}
              path={`projects/${type}`}
              element={<PortfolioPage projectType={type} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
