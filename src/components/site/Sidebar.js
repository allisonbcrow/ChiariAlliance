import React from 'react'
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import DailyIndex from '../../daily/DailyIndex'
import Auth from '../../auth/Auth'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'

const Sidebar = (props) =>{ 


    const protectedDaily = () => {
        return props.token === localStorage.getItem("token")  ? (
            <DailyIndex clearToken={props.clearToken} token={props.token} />
        ) : (
          <Auth updateToken={props.updateToken} />
        );
      };
    
    return(
    

    <div className="sidebar">
        <div className="sidebar-route">
           <Switch>
                {/* <Route exact path="/home"><Home /></Route> */}
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path='/daily/mine'>{protectedDaily()}</Route>
                <Route exact path='/daily/create'>{protectedDaily()}</Route>
                <Route exact path='/login'><Login updateToken={props.updateToken} /></Route>
                <Route exact path='/register'><Register updateToken={props.updateToken} /></Route>
                {/* <Route exact path="/loggedInView">{protectedView()}</Route> */}
                <Route exact path="/"><Home /></Route>
           </Switch>
        </div>
    </div>
)
}
export default Sidebar;