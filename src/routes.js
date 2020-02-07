import React from "react";

//import './App.css';
import Hero from "./components/main-page/Hero";
import { Route, Switch, Redirect } from "react-router-dom";
import Notfound from "./components/shared/Notfound";
import BlogIndex from "./components/Blog/BlogIndex";
import Layout from "./components/Hoc/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/blog" component={props => <BlogIndex {...props} />} />
        <Route path="/home" component={props => <Hero {...props} />} />

        <Route path={`/not-found`} component={Notfound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
