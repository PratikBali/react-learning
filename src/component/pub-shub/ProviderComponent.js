import React, { Component } from 'react'
import { Provider } from '../Context';
import ConsumerComponent from './ConsumerComponent';

class ProviderComponent  extends Component {

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
                <Provider  value={{name:'Pratik'}}>
                    <ConsumerComponent/>
                </Provider>
            </section>
        )
    }
}

export default ProviderComponent
