import React, { Component } from 'react'
import Modal from 'react-modal'
class ModalComponent  extends Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            isActive: false
        }
    }
    componentWillMount() {
        Modal.setAppElement('body')
    }
    toggle() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    afterOpenModal() {
        console.log('modal opened');

    }
    closeModal() {
        this.setState({
            isActive: false
        })
    }

    render() {

        return (
            <section>
                <button onClick={this.toggle}>Toggle Modal</button>
                <Modal isOpen={this.state.isActive}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                </Modal>
            </section>
        )
    }
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      width                 : '50%',
      height                : '50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default ModalComponent