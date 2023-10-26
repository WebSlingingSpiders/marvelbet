import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import '../src/styles/header.css'
import '../src/styles/home.css'
import '../src/styles/footer.css'
import '../src/styles/fixed.css'
import MarvelBet from "./pages/MarvelBet";
import ArticlePage from "./pages/Content/ArticlePage";
import ArticleMain from "./pages/Content/ArticleMain";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/article/" element={<ArticleMain/>} />
            <Route path="/article/welcome-to-marbelbet" element={<MarvelBet/>} />
            <Route path="/article/welcome-to-marbelbet/:id" element={<ArticlePage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
