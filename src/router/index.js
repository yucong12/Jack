import React from "react"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import App from "../App"
import Social from '../component/Social'
import Digital from '../component/Digital'
import Home from '../component/Home'
import Factor from '../component/Factor'
import Hash from '../component/Hash'
import Ward from '../component/Ward'
import Praise from '../component/Praise'
import Comment from '../component/Comment'
import One from '../component/One'
import Twe from '../component/Twe'
import Three from '../component/Three'



const router = (

    <Router>
        <App>
            <Switch>
                {/* <Route path="/hot" component={Hot}/>
                <Route path="/laugh" component={Laugh}/>
                <Route path="/love" component={Love}/>
                <Route path="/star" component={Star}/>
                <Redirect from="*" to="/hot" /> */}
                <Route path="/social" component={Social}/>
                <Route path="/digital" component={Digital}/>
                <Route path="/home/:myid" component={Home}/>
                <Route path="/one" component={One}/>
                <Route path="/twe" component={Twe}/>
                <Route path="/three" component={Three}/>
                


                <Route path="/factor/:myid" render={(props)=>
                    <Factor shor={props}>
                    <Switch>
                    <Route path="/factor/:myid/ward" component={Ward}/>
                    <Route path="/factor/:myid/praise" component={Praise}/>
                    <Route path="/factor/:myid/comment" component={Comment}/>
                    <Redirect from="/factor/:myid" to="/factor/:myid/ward"/>
                    </Switch>
                    </Factor>
                }/>


                <Route path="/hash/:myid" component={Hash}/>


            </Switch>
        </App>
    </Router>

)




export default router