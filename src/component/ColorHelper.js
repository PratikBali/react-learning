import React, { Component } from 'react';

class ColorHelper extends Component {

    constructor(props) {

        super(props);

        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);

        this.state = {
            isEditing: false
        }
    }

    renderForm() {
        return(
            <form onSubmit={this.updateItem}>
                <input type="text" ref={ (value) => { this.input = value}} defaultValue={this.props.data.value}></input>
                <button type="submit" onClick={ () => { }} >Update</button>
            </form>
        )
    }

    renderItem() {
        return(
        <div>
            <li className={this.props.data.completed ? 'completed' : 'not-completed'} onClick={ () => { this.props.clickHandler(this.props.index)}}>
                {this.props.data.value} &nbsp;
                <button onClick={ (event) => { event.stopPropagation(); this.toggleState()}}  >Edit</button>
                <button onClick={ (event) => { event.stopPropagation(); this.props.deleteColor(this.props.index)}}  >Delete</button>
            </li>
            <br></br>
        </div>
        )
    }

    toggleState() {
        const { isEditing } = this.state
        this.setState({
            isEditing: !isEditing
        })
    }

    updateItem(event) {
        event.preventDefault();
        // console.log(this.input.value);
        this.props.editColor(this.props.index, this.input.value )
        this.toggleState()
    }

    render() {
        const { isEditing } = this.state;
        return(
            <div>
                {
                    isEditing ? this.renderForm() : this.renderItem()
                }

            </div>
        )

    }
    
}

export default ColorHelper;