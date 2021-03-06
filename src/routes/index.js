import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Loading } from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Newsdetail = lazy(() => import("../pages/News_detail"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Categories = lazy(() => import("../pages/Categories"));
const News = lazy(() => import("../pages/News"));
const LoveProduct = lazy(() => import("../pages/LoveProduct"));
const ShoppingCart = lazy(() => import("../pages/ShoppingCart"));
const User = lazy(() => import("../pages/UserInfoPage"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));
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
          <Route path="/news/:id" exact>
            {/* Chi tiết tin tức */}
            <Newsdetail></Newsdetail>
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
          <Route path="/products/:idProduct" exact>
            {/* Chi tiết sản phẩm */}
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
          <Route path="/categories/*">
            <Categories></Categories>
          </Route>
          <Route path="/contact" exact>
            <Contact></Contact>
          </Route>
          <Route path="/myloveproduct" exact>
            <LoveProduct></LoveProduct>
          </Route>
          <Route path="/myshoppingcart" exact>
            <ShoppingCart></ShoppingCart>
          </Route>
          <Route path="/forgotPassword" exact>
            <ForgotPassword></ForgotPassword>
          </Route>
          <Route path="/reset/:token">
            <ResetPasswordPage></ResetPasswordPage>
          </Route>
          <Route path="/PageNotFound">
            <PageNotFound></PageNotFound>
          </Route>
          <Redirect from="*" to="/PageNotFound" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
