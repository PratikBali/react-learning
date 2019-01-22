import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'

class RouteGuard  extends Component {

    constructor() {
        super();
        this.save = this.save.bind(this)
        this.state = {
            isChanged: false
        }
    }
    save() {
        this.setState({
            isChanged: false
        })
    }
    render() {

        return (
            <section>
                <Prompt when={this.state.isChanged} message='Leave this page without saving?' />
                <h1>Route Guard </h1>
                <input type="text" onChange={() => {
                    this.setState({
                        isChanged: true
                    })
                }} />
                <button onClick={this.save} >Save</button>
            </section>
        )
    }
}

export default RouteGuard