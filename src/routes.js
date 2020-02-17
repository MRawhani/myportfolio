import React from "react";

//import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";
import Notfound from "./components/shared/Notfound";
import BlogIndex from "./components/Blog/BlogIndex";
import Layout from "./components/Hoc/Layout";
import MainIndex from "./components/main-page/MainIndex";
import BlogEdit from "./components/Blog/BlogEdit";
import PortfolioIndex from "./components/portfolios/PortfolioIndex";
import Login from "./components/form/Login";

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/portfolio" component={props => <PortfolioIndex {...props} />} />
      <Route path="/blogEdit" component={props => <BlogEdit {...props} />} />
        <Route path="/blog" component={props => <BlogIndex {...props} />} />
        <Route path="/login" component={props => <Login {...props} />} />
        <Route path="/home" component={props => <MainIndex {...props} />} />

        <Route path={`/not-found`} component={Notfound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
