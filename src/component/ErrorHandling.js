import React, { Component } from 'react'
import ErrorHandler from './ErrorHandler';

class ErrorHandling  extends Component {

    constructor() {
        super();
        this.save = this.save.bind(this)
        this.state = {
        }
    }
    save() {
        this.setState({
        })
    }
    render() {

        return (
            <section>
                <button onClick={this.save} >Save</button>
                <ErrorHandler>
                    <Header/>
                </ErrorHandler>
            </section>
        )
    }
}

class Header extends Component {
    constructor() {
        super();
        throw new Error('err');
    }
    render() {
        return <h1> Hello I am Header</h1>
    }
}

export default ErrorHandling