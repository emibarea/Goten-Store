import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Footer } from '../../common/Footer'
import { Header } from '../../common/Header'
import { Details } from '../details/Details'
import { Home } from '../Home'
import { Contact } from '../contact/Contact'
function Pages() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/details/:id'>
              <Details />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
        </Switch>
        <Footer />
    </Router>
  )
}

export default Pages