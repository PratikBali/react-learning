import React, { Component } from 'react'
import styled, {css} from 'styled-components'

const Mydiv = styled.div`
    text-align: center;
    text-transform: capitalize;
    text-shadow: 2px 3px magenta;
    color: blue;
    font-size: 40px;
    font-weight: 500;
    font-style: italic;
    font-family: monospace;
`

class StyledComponents  extends Component {

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
                <Mydiv>
                    real family names of actual fonts, whereas "monospace" is just a generic reference to any font installed on the user's system that's monospaced.
                </Mydiv>
                <AppContainer showBorder={true}>
                    red border
                </AppContainer> <br></br>
                <AppContainer showBorder={false}>
                    blue border
                </AppContainer>
           </section>
        )
    }
}

export default StyledComponents

let border = css`
    ${props => {
        if(props.showBorder) {
            return `border: 2px solid red;`
        } else {
            return `border: 2px solid blue;`
        }
    }}
`
const AppContainer = styled.div`
    max-width:200px;
    text-align:center;
    ${border}
`;
