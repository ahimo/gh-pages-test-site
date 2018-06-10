// src/App.js
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import page1 from './page1.js'
import page2 from './page2.js'

const HelloWorld = ()=>(
    <h1>Hello, World!</h1>
)

const App = ()=>(
    <BrowserRouter>
        <div>
            <Route exact path='/'      component={HelloWorld} />
            <Route       path='/page1' component={page1} />
            <Route       path='/page2' component={page2} />
        </div>
    </BrowserRouter>
)

export default App
