import React, { Component } from 'react'
import { Consumer } from '../Context';

class ConsumerComponent  extends Component {

    constructor() {
        super();
        this.save = this.save.bind(this)
        this.state = {
        }
    }
    save(event) {
        console.log(event.target.tagName);
        event.persist();

        setTimeout(() => {
            console.log(event.target.tagName);
        }, 1000);
    }
    render() {

        return (
            <section>
                <Consumer>
                    { (value) => {
                        if (value) {
                            return <div>Hello {value.name} </div>
                            }
                        }
                    }
                </Consumer>
                <div>
                   <button onClick={this.save} >Click</button>
                </div>
            </section>
        )
    }
}

export default ConsumerComponent
