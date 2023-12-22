import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import "../src/styles/header.css";
import "../src/styles/home.css";
import "../src/styles/footer.css";
import "../src/styles/fixed.css";
import WcMarvelbet from "./pages/Content/WcMarvelbet";
import ArticleMain from "./pages/Content/ArticleMain";
import CrickexBettingApp from "./pages/Content/CrickexBettingApp";
import IrelandUltimate from "./pages/Content/IrelandUltimate";
import Australia from "./pages/Content/Australia";
import Batters from "./pages/Content/Batters";
import BreakingDown from "./pages/Content/BreakingDown";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/article/" element={<ArticleMain />} />
            <Route
              path="/article/welcome-to-marvelbet"
              element={<WcMarvelbet />}
            />
            <Route
              path="/article/mobile-criket-betting"
              element={<CrickexBettingApp />}
            />
            <Route
              path="/article/ireland-ultimate-test"
              element={<IrelandUltimate />}
            />
            <Route
              path="/article/Australia's-Top-5-Century-Scorers-in-ODI-Cricket"
              element={<Australia />}
            />
            <Route
              path="/article/Batters-Who-Has-Scored-the-Most-Runs-in-a-CPL-Season"
              element={<Batters />}
            />
            <Route
              path="/article/Breaking-Down-Billings'-Unbeaten-76-in-the-Invincibles'-Path-to-the-Final"
              element={<BreakingDown />}
            />
            {/* <Route path="/article/welcome-to-marbelbet" element={<MarvelBet/>} />
            <Route path="/article/welcome-to-marbelbet/:id" element={<ArticlePage/>} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
