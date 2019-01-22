import React, { Component } from 'react'

class State  extends Component {

    constructor() {
        super();
        this.incrementCounter = this.incrementCounter.bind(this)
        this.state = {
            counter1: 0,
            counter2: 0,
        }
    }
    incrementCounter() {
        this.setState(
            {
                counter1:this.state.counter1 + 1
            },
            // scenario 1
            // following block is executed after exection of above block
            // anonymous function
            () => {
                console.log('sync', this.state.counter1);
            }
        );

        // scenario 2
        // following line is executed before setState block
        console.warn('async', this.state.counter1);

        // scenario 3
        // we can keep copy of previous state to avoid further change in state by another block
        this.setState((prevState) => {
            return {
                counter2: prevState.counter2 + 1
            }
        })
    }
    render() {
        const {counter1} = this.state;
        const {counter2} = this.state;
        return (
            <section>
                <h1>Counter 1 incrementing by object : {counter1}</h1>
                <h1>Counter 2 incrementing by function : {counter2}</h1>
                <button className='btn btn-outline-warning' onClick={this.incrementCounter}>Increment</button>
            </section>
        )
    }
}

export default State