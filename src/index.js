import React from 'react';
import ReactDOM  from 'react-dom';
import {Route} from "react-router";
import { BrowserRouter, Link, Switch  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

import Routing from './component/Routing.js';
import Children from './component/Children.js';
import Design from './component/Design.js';
import State from './component/State.js';
import RouteGuard from './component/RouteGuard.js';
import ModalComponent from './component/Modal.js';
import StyledComponents from './component/StyledComponents.js';
import Color from './component/Color';
import ErrorHandling from './component/ErrorHandling';


const App = ( ) => (
    <header>
        <h2 className='whitetext container row'>App</h2>
        <BrowserRouter>
            <div className='row'>
                <div className='col-md-2'>
                    {/* <Route path="/" component={Home} /> */}
                    <Nav/>
                </div>
                <div className='col-md-10'>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path='/routing' component={Routing}/>
                    <Route path='/children' component={Children}/>
                    <Route path='/design-pattern' component={Design}/>
                    <Route path='/state' component={State}/>
                    <Route path='/route-guard' component={RouteGuard}/>
                    <Route path='/modal' component={ModalComponent}/>
                    <Route path='/styled' component={StyledComponents}/>
                    <Route path='/color' component={Color}/>
                    <Route path='/error' component={ErrorHandling}/>

                    <Route exact path="/" component={Empty} />
                    <Route component={NotFound}/>
                </Switch>
                </div>
            </div>
        </BrowserRouter>
    </header>
)
const About = ( ) => (
    <div>
        <h2 className='whitetext'>About</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>

)
const NotFound = ( ) => (
    <div>
        <h2 className='whitetext'>Page Not Found</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>

)
const Empty = ( ) => (
    <div>

    </div>

)
const Login = ( ) => (
    <div>
        <h2 className='whitetext'>Login</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>

)
const Nav = ( ) => (
    <div>
        <ul>
            <li><Link to='/' className='whitetext'>Home</Link></li>
            <li><Link  to='/about' className='whitetext'>About</Link></li>
            <li><Link  to='/login' className='whitetext'>Login</Link></li>
            <li><Link  to='/color' className='whitetext'>Color</Link></li>
            <li><Link  to='/routing' className='whitetext'>Routing</Link></li>
            <li><Link  to='/children' className='whitetext'>Children API</Link></li>
            <li><Link  to='/design-pattern' className='whitetext'>Design Pattern</Link></li>
            <li><Link  to='/state' className='whitetext'>setState() </Link></li>
            <li><Link  to='/route-guard' className='whitetext'>Route Guard </Link></li>
            <li><Link  to='/modal' className='whitetext'>React Modal </Link></li>
            <li><Link  to='/styled' className='whitetext'>Styled Components </Link></li>
            <li><Link  to='/error' className='whitetext'>Error Handling </Link></li>
        </ul>
    </div>
)

ReactDOM.render(<App/>,   document.getElementById('root'));

createGlobalStyle([`body { background-color:  black; }`])