import React, { Component } from 'react'
import bindFunctions from '../util/utils.js'
import * as $ from "jquery";
import '../index.scss';
import ColorHelper from './ColorHelper.js';
import TodoForm from './ColorForm.js';
import TodoItem from './TodoItem.js';
import produce from 'immer'

class Color extends Component {
    constructor() {

        super();
        // we are going to bind this functions in single step by using
        // this.changeStatus = this.changeStatus.bind(this);
        // this.update = this.update.bind(this);
        // this.add = this.add.bind(this);
        // this.edit = this.edit.bind(this);
        // this.delete = this.delete.bind(this);

        // bind all functions in single step
        bindFunctions.call(this, ['changeStatus','update','add','edit','delete'])


        this.state = {
            current: '',
            colors: [
                {key: 1, value: 'magenta', completed: false},
                {key: 2, value: 'red', completed: false},
                {key: 3, value: 'green', completed: false},
                {key: 4, value: 'blue', completed: false},
                ],
            users: [],
            todos: ['learn react', 'learn python']
        }

    }

    componentDidMount() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            success: (data) => {
                this.setState({
                    users:data
                })
            }
        })

        this.refs.addTodo.focus()
    }



    changeStatus(index) {
        // var colors = this.state.colors;
        // var color = colors[index];
        // color.completed = !color.completed;

        const newColors = produce(this.state.colors, function(colors) {
            colors[index].completed = !colors[index].completed
        })

        this.setState({colors: newColors})

    }
    update(event) {
        this.setState({
            current: event.target.value
        })
    }
    add(event) {
        event.preventDefault(); // no refresh
        let colors = this.state.colors
        var color = this.state.current
        colors.push({
            key: 5,
            value: color,
            completed: false,
        })

        this.setState({ colors, current: '' })
    }
    delete(index) {
        let colors = this.state.colors
        colors.splice(index,1)
        this.setState({colors: colors})
    }
    edit(index, newColor) {
        var colors = this.state.colors;
        var color = colors[index];
        color.value = newColor;

        this.setState({colors})

    }
    render() {
        const {todos} = this.state;

        return(
            <section>
                <div>
                    <TodoForm currentColor={this.state.current} updateColor={this.update} addColor={this.add}  />
                    <ul>{
                        this.state.colors.map((task, index) => {
                            return <ColorHelper key={index} data={task} index={index}
                                            clickHandler={this.changeStatus}
                                            deleteColor={this.delete}
                                            editColor={this.edit}/>
                                        })
                        }
                    </ul>
                </div>

                <div className='whitetext'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                            // todos.push(this.refs.addTodo.value);
                            // this.setState({todos:todos});
                            this.setState({
                                todos:todos.concat(this.refs.addTodo.value)
                            })
                            this.refs.addTodo.value = "";
                            this.refs.addTodo.getInputDOMNode().focus()

                        }} >
                        <input type="text" ref="addTodo" />
                        <button type="submit">Add To do</button>
                    </form>
                </div>

                <div>
                    {/* {
                        this.state.todos.map((item, i) => {
                            return <TodoItem key={i} todos={item}/>
                        })
                    } */}

                    <TodoItem todos={this.state.todos}/>

                </div>
            </section>
        )
    }

}

export default Color