import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import ArticleList from "./pages/ArticleList"
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
        <div id="page-body">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<About />}  />
        <Route path="/article-list" element={<ArticleList />}  />
        <Route path="/article/:name" element={<ArticlePage />}  />
        </Routes>
        </div>
        
      
    </Router>
  );
}

export default App;
