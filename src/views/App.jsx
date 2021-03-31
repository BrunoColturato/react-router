import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Menu from '../components/Menu'
import Content from '../components/Content'

export default function App() {
    return(
        <div className="App">
            <Router>
                <Menu /> 
                <Content />          
            </Router>
        </div>
    )
}