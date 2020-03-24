import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'

const message = 'Welcome to matterwiki-client'
const App = () => (
    <div className="App">
        <h1>{message}</h1>
        <h2>{message}</h2>
        <h3>{message}</h3>
        <h4>{message}</h4>
        <div>{message}</div>
    </div>
)

export default hot(module)(App)
