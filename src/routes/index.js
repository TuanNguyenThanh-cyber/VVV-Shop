import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Loading } from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Products = lazy(() => import("../pages/Products"));
const Categories = lazy(() => import("../pages/Categories"));
const News = lazy(() => import("../pages/News"));
const PageNotFound = lazy(() => import("../pages/404"));

export default function Router() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/news" exact>
            <News></News>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/signup" exact>
            <Signup></Signup>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/categories/:lv1">
            <Categories></Categories>
          </Route>
          <Route path="/contact" exact>
             <Contact></Contact>
          </Route>
          <Route path='/PageNotFound'>
            <PageNotFound></PageNotFound>
          </Route>
          <Redirect from='*' to='/PageNotFound' />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}