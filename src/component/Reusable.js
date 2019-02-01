import React, { Component } from 'react'
import { State, Hover } from './ReusableHelper';

class Reusable  extends Component {

    constructor() {
        super();
        // this.save = this.save.bind(this)
        this.state = {
        }
    }
    // save() {
    //     this.setState({
    //     })
    // }
    render() {

        return (
            <section>
                Reusable components Demo
                {/* <button onClick={this.save} >Save</button> */}
                <State initial={{loading:  false, data: null}}>
                    {
                        ( {state, setState} ) =>{
                            return <div>
                                <code>State 1</code> <br/>
                                {JSON.stringify(state)} <br/>
                                <button onClick={() => setState({
                                    loading: !state.loading
                                })}>Toggle</button>
                            </div>
                        }
                    }
                </State>

                <State initial={{count: 0}}>
                    {
                        ( {state, setState} ) =>{
                            return <div>
                                <code>State 2</code> <br/>
                                {JSON.stringify(state)} <br/>
                                <button onClick={() => setState({
                                    count: state.count+1
                                })}>Increment</button>
                            </div>
                        }
                    }
                </State>

                <Hover>
                   { ( {hovered, bind} ) => (
                        <section>
                            <div {...bind} className='col-md-2 alert alert-success'>
                                Hover Me <br/>
                                {hovered ? 'hovering' : 'not hovering'}
                            </div>
                        </section>
                   )}
                </Hover>
            </section>
        )
    }
}

export default Reusable