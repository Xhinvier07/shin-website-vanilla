import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import OthersPage from "./pages/OthersPage";
import Footer from "./pages/Footer";
import GradualBlur from "./components/GradualBlur";

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col relative">
        <Navbar />
        <div className="flex-1 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/others" element={<OthersPage />} />
          </Routes>
        </div>
        <Footer />
        
        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          style={{ 
            bottom: '80px', // Position above footer (adjust based on footer height)
            zIndex: 10
          }}
        />
      </div>
    </Router>
  );
}

export default App;
