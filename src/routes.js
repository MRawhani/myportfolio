import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Notfound from "./components/shared/Notfound";

import Layout from "./components/Hoc/Layout";
import MainIndex from "./components/main-page/MainIndex";
import PortfolioIndex from "./components/portfolios/PortfolioIndex";
import Blog from "./components/Blog/Blog";
import BlogDetail  from "./components/Blog/BlogDetail";

function App() {
  return (
    <Layout>
      <Switch>
      
      <Route path="/portfolio" component={props => <PortfolioIndex {...props} />} />
      {/* <Route path="/blogEdit" component={props => <BlogEdit {...props} />} />  */}
      <Route path="/blogPost/:id" component={props => <BlogDetail {...props} />} />
        <Route path="/blog" component={props => <Blog {...props} />} />
        {/* <Route path="/login" component={props => <Login {...props} />} /> */}
        <Route path="/home" component={props => <MainIndex {...props} />} />

        <Route path={`/not-found`} component={Notfound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
