import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";

import HomePage from "./page/HomePage";
import ChampionPage from "./page/ChampionPage";
import RankingPage from "./page/RankingPage";
import LoginPage from "./page/LoginPage";
import CommunityPage from "./page/CommunityPage";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/champion" component={ChampionPage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/community" component={CommunityPage} />
      </Switch>
    </div>
  );
}

export default App;
