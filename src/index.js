import React from 'react';
import ReactDOM  from 'react-dom';
// import * as $ from "jquery";
// import './index.scss';
// import TodoItem from './component/TodoItem.js';
// import TodoForm from './component/TodoForm.js';
// import bindFunctions from './util/utils.js'
import Routing from './component/Routing.js';
import Children from './component/Children.js';
import Design from './component/Design.js';

import { Route } from "react-router";
import { BrowserRouter, Link  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = ( ) => (
    <header>
        <h2 className='whitetext container row'>App</h2>
        <BrowserRouter>
            <div className='row'>
                <div className='col-md-2'>
                    <Home/>
                </div>
                <div className='col-md-10'>
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path='/routing' component={Routing}/>
                    <Route path='/children' component={Children}/>
                    <Route path='/design-pattern' component={Design}/>
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
const Login = ( ) => (
    <div>
        <h2 className='whitetext'>Login</h2>
        <li><Link to='/' className='whitetext'>Home</Link></li>
    </div>

)
const Home = ( ) => (
    <div>
        <ul>
            <li><Link to='/' className='whitetext'>Home</Link></li>
            <li><Link  to='/about' className='whitetext'>About</Link></li>
            <li><Link  to='/login' className='whitetext'>Login</Link></li>
            <li><Link  to='/routing' className='whitetext'>Routing</Link></li>
            <li><Link  to='/children' className='whitetext'>Children API</Link></li>
            <li><Link  to='/design-pattern' className='whitetext'>Design Pattern</Link></li>
        </ul>
    </div>
)

ReactDOM.render(
<App/>,    document.getElementById('root'));

// class Hello extends Component {
//     constructor() {

//         super();
//         // we are going to bind this functions in single step by using
//         // this.changeStatus = this.changeStatus.bind(this);
//         // this.update = this.update.bind(this);
//         // this.add = this.add.bind(this);
//         // this.edit = this.edit.bind(this);
//         // this.delete = this.delete.bind(this);

//         // bind all functions in single step
//         bindFunctions.call(this, ['changeStatus','update','add','edit','delete'])


//         this.state = {
//             current: '',
//             colors: [
//                 {key: 1, value: 'magenta', completed: false},
//                 {key: 2, value: 'red', completed: false},
//                 {key: 3, value: 'green', completed: false},
//                 {key: 4, value: 'blue', completed: false},
//                 ],
//             users: [],
//             todos: ['learn react', 'learn python']
//         }
//     }


//     componentWillMount() { }
//     componentDidMount() {
//         $.ajax({
//             url: 'https://jsonplaceholder.typicode.com/users',
//             success: (data) => {
//                 this.setState({
//                     users:data
//                 })
//             }
//         })

//     }

//     componentWillReceiveProps() { }
//     shouldComponentUpdate() {  return true;}
//     componentWillUpdate() { }


//     changeStatus(index) {
//         var colors = this.state.colors;
//         var color = colors[index];
//         color.completed = !color.completed;

//         this.setState({colors})

//     }
//     update(event) {
//         this.setState({
//             current: event.target.value
//         })
//     }
//     add(event) {
//         event.preventDefault(); // no refresh
//         let colors = this.state.colors
//         var color = this.state.current
//         colors.push({
//             key: 5,
//             value: color,
//             completed: false,
//         })

//         this.setState({ colors, current: '' })
//     }
//     delete(index) {
//         let colors = this.state.colors
//         colors.splice(index,1)
//         this.setState({colors: colors})
//     }
//     edit(index, newColor) {
//         var colors = this.state.colors;
//         var color = colors[index];
//         color.value = newColor;

//         this.setState({colors})

//     }
//     render() {
//         const {users} = this.state;
//         const {todos} = this.state;

//         return(
//             <section>
//                 <div>
//                 {/* <TodoForm currentColor={this.state.current} updateColor={this.update} addColor={this.add}  />
//                 <ul>{
//                     this.state.colors.map((task, index) => {
//                         return <TodoItem key={index} data={task} index={index}
//                         clickHandler={this.changeStatus}
//                         deleteColor={this.delete}
//                         editColor={this.edit}
//                         />})
//                     }
//                 </ul> */}
//                 </div>

//                 <div className='whitetext'>
//                     <ul>
//                         {
//                             users.map( (user, index) => {
//                                 return <li key={user.id}>{ user.name}</li>
//                             })
//                         }
//                      </ul>
//                 </div>

//                 <div className='whitetext'>
//                         <form onSubmit={(e) => {
//                             e.preventDefault();
//                                 // todos.push(this.refs.addTodo.value);
//                                 // this.setState({todos:todos});
//                                 this.setState({
//                                     todos:todos.concat(this.refs.addTodo.value)
//                                 })
//                                 this.refs.addTodo.value = "";
//                             }} >
//                             <input type="text" ref="addTodo" />
//                             <button type="submit">Add To do</button>
//                         </form>
//                         <TodoItem todos={todos} />
//                 </div>

//                 <div>

//                 </div>
//             </section>
//         )
//     }

// }