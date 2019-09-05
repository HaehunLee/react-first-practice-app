import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import RichTextEditor from 'react-rte';
import '../../views/partners/Notice.css'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import test from './test';
import { BoldButton } from '@slate-editor/bold-plugin';

class QuestionModal extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

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
      modal: false,
      value: RichTextEditor.createEmptyValue()
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['BLOCK_TYPE_DROPDOWN', 'INLINE_STYLE_BUTTONS', 'HISTORY_BUTTONS'],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'}
      ],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Alignments', style : 'Alignments'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
    };


    return (
      <div>
        <Button className={classnames('float-right notice-btn question-btn')} onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal style={{maxWidth : '600px'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>파트너에게 문의하기</ModalHeader>
          <ModalBody>
          <Table className="qTable">
            <tr>
              <th style={{backgroundColor:'rgb(228, 231, 234)', width:'20%'}}>제목</th>
              <td style={{width:'80%'}}>
                <div>
                  <input type="text" name="title_input"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th style={{backgroundColor:'rgb(228, 231, 234)', width:'20%'}}>문의셀러</th>
              <td style={{width:'80%'}}>
                <div style={{maxHeight : '10px'}}>
                  <input type="text" name="title_input"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th style={{backgroundColor:'rgb(228, 231, 234)', width:'20%'}}>작성자</th>
              <td style={{width:'80%'}}>
                <div>
                  <input type="text" name="title_input"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th style={{backgroundColor:'rgb(228, 231, 234)', width:'20%'}}>첨부파일</th>
              <td style={{width:'80%'}}>
                <div>
                  <input type="file" name="title_input"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th colSpan="2" style={{backgroundColor:'rgb(228, 231, 234)'}}>내용</th>  
            </tr>  
          </Table>
          {/* <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        toolbarConfig={toolbarConfig}
        placeholder='내용을 입력해주시기 바랍니다.'
        style= {{height:'400px'}}
        editorClassName="new-post-editor"
      /> */}

      <test
      />


          </ModalBody>
          <ModalFooter style={{alignItems:'center', justifyContent:'center'}}>
          <Button className={classnames('notice-btn')}>문의등록</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default QuestionModal;