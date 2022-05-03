import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import ArticleListPage from './pages/ArticleListPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
        <div id="page-body">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<About />}  />
        <Route path="/article-list" element={<ArticleListPage />}  />
        <Route path="/article/:name" element={<ArticlePage />}  />
        <Route path='*' element={<NotFound />}  />
        </Routes>
        </div>
        
      
    </Router>
  );
}

export default App;
