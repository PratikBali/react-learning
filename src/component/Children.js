import React, {Component} from 'react'

class Children extends Component {
    render () {
        return (
            <section>
                <Child1>
                    <p>world 1</p>
                    <p>world 2</p>
                    <p>world 3</p>
                </Child1>
                <Child2>
                    <div>
                        <p>hello 1</p>
                        <p>hello 2</p>
                        <p>hello 3</p>
                    </div>
                </Child2>
            </section>
        )
    }

}

class Child1 extends Component {
    render () {
        return (
            <section>
                <div>
                    {this.props.children}
                </div>
                <div>
                    {/* following statement provide error */}
                    {/* {React.Children.only(this.props.children)} */}
                </div>
                <hr></hr>

            </section>
        )
    }
}
class Child2 extends Component {
    render () {
        return (
            <section>
                <div>
                    {this.props.children}
                </div>
                <div>
                    {/* following statement does not provide error */}
                    {React.Children.only(this.props.children)}
                </div>
                <hr></hr>

            </section>
        )
    }
}

export default Children
