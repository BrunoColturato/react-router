import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './Content.css'

import Home from '../views/examples/Home'
import About from '../views/examples/About'
import Param from '../views/examples/Param'
import NotFound from '../views/examples/NotFound'

export default function Content() {
    return(
        <div className="Content">
            <Switch>
                <Route path="/param/:name">
                    <Param />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>         
        </div>
    )
}