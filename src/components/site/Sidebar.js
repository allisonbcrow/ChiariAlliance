import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-route">
           <Switch>
                {/* <Route exact path="/home"><Home /></Route> */}
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                {/* <Route exact path="/loggedInView">{protectedView()}</Route> */}
           </Switch>
        </div>
    </div>
)

export default Sidebar;