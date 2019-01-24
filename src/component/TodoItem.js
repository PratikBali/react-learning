import React, {
    Component
} from 'react'

class TodoItem extends Component {

    constructor() {
        super();
        this.save = this.save.bind(this)
        this.state = {}
    }
    save() {
        this.setState({})
    }
    render() {

        return (
            <section>
                <ul> {
                        this.props.todos.map((todo, index) => {
                            return <li key = {index} > {todo} </li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default TodoItem