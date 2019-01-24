import React, { Component } from 'react'

class aa  extends Component {

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
            </section>
        )
    }
}

export default aa