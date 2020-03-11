//define routes here for react-navigation

import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './scenes/Home'
import StudentsListScreen from './scenes/StudentsListScreen'

const Routes = () => {
    return (
        <Router>
            <Scene key = "root">
                <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                <Scene key = "about" component = {StudentsListScreen} title = "About" path="/about" />
            </Scene>
        </Router>
    )
}


export default Routes