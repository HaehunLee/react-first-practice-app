import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RichTextEditor from 'react-rte';
import '../../views/partners/Notice.css'
import classnames from 'classnames';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    console.log(this.props.data);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button className={classnames('float-right notice-btn question-btn')} onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal style={{maxWidth : '600px'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>파트너에게 문의하기</ModalHeader>
          <ModalBody>
            
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default QuestionModal;