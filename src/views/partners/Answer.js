import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Notice.css'
import { Row, Col, FormGroup, Input } from 'reactstrap';
//import classnames from 'classnames';
import DataTable from 'react-data-table-component';

let testData2 = [
    {
        index : '1',
        type : '답변완료',
        writer : '모니카나인살롱케어',
        title : '안녕하세요? 미페이 충전 방법에 대해서 문의드립니다.',
        regId : '-',
        regDatetime : '-',
    },
    {
        index : '2',
        type : '답변완료',
        writer : '모니카나인살롱케어',
        title : '안녕하세요? 미페이 충전 방법에 대해서 문의드립니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
    },
    {
        index : '3',
        type : '미답변',
        writer : '모니카나인살롱케어',
        title : '안녕하세요? 미페이 충전 방법에 대해서 문의드립니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
    },
    {
        index : '4',
        type : '미답변',
        writer : '모니카나인살롱케어',
        title : '안녕하세요? 미페이 충전 방법에 대해서 문의드립니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
    },
]


const columns2 = [
    // {
    //   name: '',
    //   selector: 'code_title',
    //   width : '50px',
    //   center : true
    // },
    {
      name: 'NO',
      selector: 'index',
      width : '50px',
      center : 'true',
    },
    {
      name: '상태',
      selector: 'type',
      width : '70px',
      center : 'true',
    },
    {
      name: '작성자',
      selector: 'writer',
      width : '140px',
      center : 'true',
    },
    {
      name: '제목',
      selector: 'title',
      width : '450px',
      center : 'true',
      },
    {
      name: '답변자',
      selector: 'regId',
      width : '120px',
      center : 'true',
    },
    {
      name: '작성일',
      selector: 'regDatetime',
      width : '80px',
      center : 'true',
      },
  ];

  export default class Answer extends Component{

    constructor(props){
      super(props);
      console.log("@@ 컴포넌트가 만들어짐 @@ component");
  }


  componentDidMount(){
    console.log("@@ 첫 렌더링 후 @@ component");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("@@ props, state 변경 시 리렌더링 여부 @@ component");
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    console.log("@@ 리렌더링 후 실행 @@ component");
  }

  componentWillUnmount(){
    console.log("@@ 컴포넌트가 DOM에서 사라진 후 @@ component");
  }


        render(){
          console.log("@@ 렌더링 @@  component");
            return(

                <div>
                    <FormGroup check>
                        <Row style= {{marginTop:10, marginLeft:10}}>
                            <Col sm={2}>
                            <Input type="radio" name="radio1" />{'전체보기'}
                            </Col>
                            <Col sm={2}>
                            <Input type="radio" name="radio1" />{'미답변만 보기'}
                            </Col>
                        </Row>
                    </FormGroup>

                <Row className="notice-btn-list">
                    <Col sm="12">
                        
                    </Col>
                    </Row>
                    <Col sm="12">
                      <DataTable
                      title=""
                      data = {testData2}
                      columns = {columns2}
                      selectableRows
                      noHeader
                      responsive={false}
                      defaultSortField = "index"
                      defaultSortAsc = {false}
                      style={{fontSize:5}}
                      />
                    </Col>
                </div>
            )
        }
  }