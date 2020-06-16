import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Espectaculo from './pages/Espectaculo'
import Home from'./pages/Home'
import Novo from './pages/Novo'
import Header from './components/Header'
import Footer from './components/Footer'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/espectaculo' component={Espectaculo} />
                <Route exact path='/novo' component={Novo} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes