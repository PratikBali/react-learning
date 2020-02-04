import React from 'react';
import ReactDOM  from 'react-dom';
import {Route} from "react-router";
import { BrowserRouter, Link, Switch  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import loadable from 'react-loadable';
import ProviderComponent from './component/pub-shub/ProviderComponent';
import ConsumerComponent from './component/pub-shub/ConsumerComponent';

const DemoLoader = loadable({
    loader: () => import(/*webpackChunkName: 'DemoLoader' */ './component/LoaderComponent.js'),
    loading: () => <div>Loading</div>
})
const Routing = loadable({
    loader: () => import(/*webpackChunkName: 'Routing' */ './component/Routing.js'),
    loading: () => <div>Routing Loading</div>
})
const Children = loadable({
    loader: () => import(/*webpackChunkName: 'Children' */ './component/Children.js'),
    loading: () => <div>Children Loading</div>
})
const Design = loadable({
    loader: () => import(/*webpackChunkName: 'Design' */ './component/Design.js'),
    loading: () => <div>Design Loading</div>
})
const State = loadable({
    loader: () => import(/*webpackChunkName: 'State' */ './component/State.js'),
    loading: () => <div>State Loading</div>
})
const RouteGuard = loadable({
    loader: () => import(/*webpackChunkName: 'RouteGuard' */ './component/RouteGuard.js'),
    loading: () => <div>RouteGuard Loading</div>
})
const ModalComponent = loadable({
    loader: () => import(/*webpackChunkName: 'ModalComponent' */ './component/Modal.js'),
    loading: () => <div>ModalComponent Loading</div>
})
const StyledComponents = loadable({
    loader: () => import(/*webpackChunkName: 'StyledComponents' */ './component/StyledComponents.js'),
    loading: () => <div>StyledComponents Loading</div>
})
const Color = loadable({
    loader: () => import(/*webpackChunkName: 'Color' */ './component/Color.js'),
    loading: () => <div>Color Loading</div>
})
const ErrorHandling = loadable({
    loader: () => import(/*webpackChunkName: 'ErrorHandling' */ './component/ErrorHandling.js'),
    loading: () => <div>ErrorHandling Loading</div>
})
const Reusable = loadable({
    loader: () => import(/*webpackChunkName: 'Reusable' */ './component/Reusable.js'),
    loading: () => <div>ErrorHandling Loading</div>
})
const Deprecated = loadable({
    loader: () => import(/*webpackChunkName: 'Deprecated' */ './component/Deprecated.js'),
    loading: () => <div>Deprecated Loading</div>
})

const App = ( ) => (<header>
        <h2 className='whitetext container row'>App</h2>
        <BrowserRouter>
            <div className='row'>
                <div className='col-md-2'>
                    {/* <Route path="/" component={Home} /> */}
                    <Nav/>
                </div>
                <div className='col-md-3'>
                    <Switch>
                        <Route exact path="/" component={DemoLoader} />
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
                        <Route path='/pub' component={ProviderComponent}/>
                        <Route path='/sub' component={ConsumerComponent}/>
                        <Route path='/reuse' component={Reusable}/>
                        <Route path='/depr' component={Deprecated}/>

                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <div className='col-md-2'>
                    Hi
                </div>
            </div>
        </BrowserRouter>
    </header>
)
const About = ( ) => (<div>
        <h2 className='whitetext'>About</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>
)
const NotFound = ( ) => (<div>
        <h2 className='whitetext'>Page Not Found</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>
)
const Login = ( ) => (<div>
        <h2 className='whitetext'>Login</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>
)
const Nav = ( ) => (<div>
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
            <li><Link  to='/pub' className='whitetext'>Provider Component </Link></li>
            <li><Link  to='/sub' className='whitetext'>Consumer Component </Link></li>
            <li><Link  to='/reuse' className='whitetext'>Reusable Component </Link></li>
            <li><Link  to='/depr' className='whitetext'>Deprecates life-cycle </Link></li>
        </ul>
    </div>
)

ReactDOM.render(
        <App/>
    ,
    document.getElementById('root'));

createGlobalStyle([`body { background-color:  black; }`])
