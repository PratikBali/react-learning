import React, { Component } from 'react'

class State  extends Component {

    constructor(props) {
        super(props);
        // this.save = this.save.bind(this)
        this.state = {
            ...this.props.initial
        }
        this.setState = this.setState.bind(this)
    }
    // save() {
    //     this.setState({
    //     })
    // }
    render() {

        return (
            <section>
                {/* <button onClick={this.save} >Save</button> */}
                {
                    this.props.children( {
                        state: this.state,
                        setState: this.setState
                })}
            </section>
        )
    }
}

// export default State

class Hover  extends Component {

    state = {
        hovered: false
    }
    onMouseEnter = () => {
        this.setState({
            hovered: true
        })
    }
    onMouseLeave = () => {
        this.setState({
            hovered: false
        })
    }
    onMouseClick = () => {
        alert('Mouse button Clicked')
    }
    render() {

        return this.props.children({
                        hovered: this.state.hovered,
                        bind: {
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onClick: this.onMouseClick
                        }
                    })
                }

}

export {
    State,Hover
}

