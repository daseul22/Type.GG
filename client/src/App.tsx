import React from "react";
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import "./styles/App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ChampionPage from "./pages/ChampionPage";
import RankingPage from "./pages/RankingPage";
import LoginPage from "./pages/LoginPage";
import CommunityPage from "./pages/CommunityPage";
import Axios from "axios";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Menu />
      <div className="l-container">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/champion" render={() => <ChampionPage />} />
          <Route exact path="/ranking" render={() => <RankingPage />} />
          <Route exact path="/login" render={() => <LoginPage />} />
          <Route exact path="/community" render={() => <CommunityPage />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
