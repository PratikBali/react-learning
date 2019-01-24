import React, { Component } from 'react'

class ErrorHandler  extends Component {

    constructor() {
        super();
        this.save = this.save.bind(this)
        this.state = {
            isError: false
        }
    }
    save() {
       alert('hi')
    }
    componentDidCatch(error, info) {
        this.setState({
            isError: true,
        });
    }
    render() {
        if (this.state.isError) {
            return <div>Error</div>
        }

        return (
            <section>
                <div> {this.props.children} </div>
            </section>
        )
    }
}

export default ErrorHandler