import React, {Component} from 'react'
import * as $ from "jquery";
import PropTypes from 'prop-types';

class Fetch extends Component {
    constructor() {
        super()
        this.state = {
            content:[]
        }
    }

    componentDidMount() {
        $.ajax({
            url:this.props.url,
            success:(data) => {
                this.setState({
                    content: data
                })
            },
            error:(err) => {
                console.log(err);

            },
        })
    }
    render () {
        return (
            <section>
                {/*
                    Accepting the childrens sent by parent component - Design
                    Get url from props and pass it to ajax
                    If Data received successfully then store it into state
                    Sending stored state to Children of Fetch component
                */}

                {this.props.children(this.state.content)}
            </section>
        )
    }
}

Fetch.propTypes = {
    url: PropTypes.string.isRequired
}
class Design extends Component {
    render () {
        return (
            <section>
                {/* Calling child Component with props */}
                <Fetch url='https://jsonplaceholder.typicode.com/users'>
                    {/*
                        Accepting the data sent by Fetch Component through his children - {this.props.children(this.state.content)}
                        Accept as parameter as data
                    */}
                    {
                        (data) => {
                            return data.map((item, i) => {
                                return <li key={i}> {item.id} </li>
                            })
                        }
                    }
                </Fetch>
                <Fetch url='https://jsonplaceholder.typicode.com/users'>
                    {/*
                        Accepting the data sent by Fetch Component through his children - {this.props.children(this.state.content)}
                        Accept as parameter as data
                    */}
                    {
                        (data) => {
                            return data.map((item, i) => {
                                return <li key={i}> {item.name} </li>
                            })
                        }
                    }
                </Fetch>
            </section>
        )
    }
}

export default Design
