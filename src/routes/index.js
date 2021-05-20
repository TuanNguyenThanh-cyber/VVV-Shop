import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Loading} from '../components/Loading'
import News from '../pages/News'

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))

export default function Router() {
    return (
        <Suspense fallback={<Loading></Loading>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/home" exact>
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
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}
