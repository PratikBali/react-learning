import React, { Component } from 'react'

class Content  extends Component {

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

    componentWillReceiveProps(newProps) {
        console.log('old Will Receive Props : ', this.props.resource);
        console.log('new Will Receive Props : ', newProps.resource);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('old Did update : ', prevProps.resource);
        console.log('->new Did update  : ', this.props.resource);
    }

    render() {

        return (
            <section>
                <div>
                    {this.props.resource}
                </div>
            </section>
        )
    }
}

export default Content