import React, { Component } from 'react'

class LoaderComponent  extends Component {

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
                <div>
                    Hello I'm Demo loader
                </div>
            </section>
        )
    }
}

export default LoaderComponent