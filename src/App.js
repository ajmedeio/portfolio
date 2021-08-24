import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

export default function App() {

    useEffect(() => {
        document.title = 'AJMed Portfolio'
    })

    return (
        <>
            <Router basename='/portfolio'>
                <Nav/>
                <Switch>
                    <Route exact path="/"><About/></Route>
                    <Route path="/portfolio"><Portfolio/></Route>
                    <Route path="/contact"><ContactForm/></Route>
                    <Route path="/resume"><Resume/></Route>
                </Switch>
            </Router>
            <Footer/>
        </>
    )
}
