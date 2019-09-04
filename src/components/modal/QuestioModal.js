import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RichTextEditor from 'react-rte';
import '../../views/partners/Notice.css'
import classnames from 'classnames';
import PropTypes from 'prop-types';

class QuestionModal extends React.Component {
    static propTypes = {
        onChange: PropTypes.func
      };
    
      state = {
        value: RichTextEditor.createEmptyValue()
      }
    
      onChange = (value) => {
        this.setState({value});
        if (this.props.onChange) {
          // Send the changes up to the parent component as an HTML string.
          // This is here to demonstrate using `.toString()` but in a real app it
          // would be better to avoid generating a string on each change.
          this.props.onChange(
            value.toString('html')
          );
        }
      };

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

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
            {/* <RichTextEditor
            value={this.state.value}
            onChange={this.onChange}
            /> */}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default QuestionModal;