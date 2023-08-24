import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { MainRoutes } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {MainRoutes.map(({ Component, path }) => (
          <Route element={<Component />} path={path} key={path} />
        ))}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
