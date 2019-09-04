import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Notice.css'
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import DataTable from 'react-data-table-component';
import QuestionModal from '../../components/modal/QuestioModal';

let testData2 = [
    {
        index : '0',
        type : '답변완료',
        title : '안녕하세요? 모니카나인 살롱케어닝 담당자 지정 관련 안내드립니다.',
        regId : '미자 운영진',
        company : '모니카나인살롱케어',
        regDatetime : '19.08.12',
        view : '12'
    },
    {
        index : '1',
        type : '대기',
        title : '안녕하세요? 모니카나인 살롱케어닝 담당자 지정 관련 안내드립니다.',
        regId : '미자 운영진',
        company : '모니카나인살롱케어',
        regDatetime : '19.08.12',
        view : '12'
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
      name: '제목',
      selector: 'title',
      width : '450px',
      center : 'true',
      },
    {
      name: '지정 입점사',
      selector: 'company',
      width : '150px',
      center : 'true',
    },
    {
      name: '작성자',
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
    {
      name: '조회',
      selector: 'view',
      center : 'true',
      },
  ];

  export default class Question extends Component{

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
                <Row className="notice-btn-list">
                    <Col sm="12">
                        <button className={classnames('notice-btn')}>
                        삭제</button>
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
                      style={{fontSize:5}}    // 안먹는이유 질문!!!!!!!
                      />
                    </Col>
                    <Col sm="12">
                      <QuestionModal buttonLabel="글쓰기" /> 
                    </Col>
                </div>
            )
        }
  }