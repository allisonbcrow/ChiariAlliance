import React from 'react'
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import DailyIndex from '../../daily/DailyIndex'
import MedicalIndex from '../../medical/MedicalIndex'
import Auth from '../../auth/Auth'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'

const Sidebar = (props) =>{ 

    
    return(
    

    <div className="sidebar">
        <div className="sidebar-route">
           <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                {props.token === localStorage.getItem("token")? (
                  <div>
                    <Route exact path='/daily/mine'><DailyIndex/></Route>
                    <Route exact path='/medical/mine'><MedicalIndex/></Route>
                  </div>
                ):(
                  <></>
                )}
                <Route exact path='/login'><Login updateToken={props.updateToken} /></Route>
                <Route exact path='/register'><Register updateToken={props.updateToken} /></Route>

           </Switch>
        </div>
    </div>
)
}
export default Sidebar;