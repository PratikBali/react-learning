import React, { Component, useState } from 'react'
import Content from './DeprecatedHelper';

class Deprecated  extends Component {

    constructor() {
        super();
        // this.save = this.save.bind(this)
        this.state = {
            currentResource: 'color'
        }
    }
    handleChange = (event) => {
        this.setState({
            currentResource : event.target.value
        })
    }
    render() {

        // const { currentResource } = this.state
        const [value , setValue] = useState('color')

        const state  = useState()

        return (
            <section>
                <div>
                    <input type='radio' name='resources' value='color' onChange={this.handleChange} /> Color
                    <input type='radio' name='resources' value='days' onChange={this.handleChange} /> Days
                    <input type='radio' name='resources' value='months' onChange={this.handleChange} /> Months
                </div>
                <Content resource={currentResource} />
            </section>
        )
    }
}

export default Deprecated