import React , {Component} from 'react';
import '../index.scss';
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { Route } from "react-router";

class Routing extends Component {
    render() {
        return (
             <BrowserRouter>
                <div className='row'>
                    <section  className='col-md-2'>
                        <Links/>
                    </section>
                    <section className='col-md-3'>
                        <Route path='/routing/content' component={Content}/>
                    </section>
                    <section className='col-md-7'>
                        <Route  path='/routing/content/:contentName' component={ContentDetails}></Route>
                    </section>
                    <br></br>
                </div>
             </BrowserRouter>
        );
    }
}

const Links = () => (
    <div className='list-group'>
        <NavLink exact className='list-group-item' activeClassName='active' to='/routing' > Routing Home</NavLink>
        <NavLink className='list-group-item' activeClassName='active' to='/routing/content' > Content</NavLink>
    </div>
)

const Content = () => (
    <div className='list-group'>
        <NavLink exact className='list-group-item' activeClassName='active' to='/routing/content/city' > City</NavLink>
        <NavLink exact className='list-group-item' activeClassName='active' to='/routing/content/sports' > Sport</NavLink>
    </div>
)

const ContentDetails = (props) => (
    <div>
        {
            props.match.params.contentName
            ?
            <div>
                <img src={'http://lorempixel.com/400/200/'+props.match.params.contentName} />
            </div>
            :
            null
        }
    </div>
)
export default Routing


// import '../index.scss';
// import { React, Component} from 'react';
// import { Route } from "react-router";
// import { BrowserRouter, Link  } from "react-router-dom";

// class Routing extends Component {
//     render() {
//         return (
//              <BrowserRouter>
//                 <div>
//                     <Links/>
//                     <Route  path='/content' component={Content}/>
//                 </div>
//              </BrowserRouter>
//         );
//     }
// }

// const Links = () => (
//     <ul>
//         <li><Link to='/routing' > Routing Home</Link></li>
//         <li><Link to='/content' > Content</Link></li>
//     </ul>
// )
// const Content = () => (
//     <ul>
//         <li><Link to='/routing' > City</Link></li>
//         <li><Link to='/content' > Sport</Link></li>
//     </ul>
// )
// export default Routing