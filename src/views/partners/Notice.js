import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Notice.css'
import { Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import DataTable from 'react-data-table-component';

let testData = [
    {
        index : '1',
        check : false,
        type : '공개',
        title : '미인자신감에 입점하신 입점사 여러분 모두 환영합니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
        view : '12'
    },
    {
        index : '2',
        check : false,
        type : '공개',
        title : '미인자신감에 입점하신 입점사 여러분 모두 환영합니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
        view : '12'
    },
    {
        index : '3',
        check : false,
        type : '공개',
        title : '미인자신감에 입점하신 입점사 여러분 모두 환영합니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
        view : '12'
    },
    {
        index : '4',
        check : false,
        type : '비공개',
        title : '미인자신감에 입점하신 입점사 여러분 모두 환영합니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
        view : '12'
    },
    {
        index : '5',
        check : false,
        type : '공개',
        title : '미인자신감에 입점하신 입점사 여러분 모두 환영합니다.',
        regId : '미자 운영진',
        regDatetime : '19.08.12',
        view : '12'
    }
]


const columns = [
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
      width : '80px',
      center : 'true',
    },
    {
        name: '제목',
        selector: 'title',
        width : '510px',
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
        center : 'right',
      },
  ];

export default class Partners extends Component{

    constructor(props) {
        super(props);

        console.log("## 컴포넌트가 만들어짐 ##");
    
        this.state = {
          tempp : '',
        };

        

      }
      


    componentDidMount(){
        console.log("## 첫 렌더링 후 ##");
        //api 통신해서 데이터 가져옴
    }

    // shouldComponentUpdate(nextProps, nextState){
    //   console.log("## props, state 변경 시 리렌더링 여부 ##");
    //   return true;
    // }

    // componentDidUpdate(prevProps, prevState){
    //   console.log("## 리렌더링 후 실행 ##");
    // }

    // componentWillUnmount(){
    //   console.log("## 컴포넌트가 DOM에서 사라진 후 ##");
    // }

    render() {

      

      //모두다 스테이트 바라보고 있음.  
      console.log("## 렌더링 ##");
        return(
            <div>
                <Row className={classnames('notice-btn-list')}>
                    <Col sm="12">
                      <Button className={classnames('notice-btn')} onClick={e => this.setState({tempp:'삭제'})}>삭제</Button>
                      <Button className={classnames('notice-btn')} onClick={e => this.setState({tempp:'비공개'})}>비공개</Button>
                      <Button className={classnames('notice-btn')} onClick={e => this.setState({tempp:'공개'})}>공개</Button>
                    <p>임시값 : {this.state.tempp}</p>
                    </Col>
                    <Col sm="12">
                      <DataTable 
                        title=""
                        data = {testData}
                        columns = {columns}
                        noHeader
                        selectableRows
                        responsive={false}
                        defaultSortField = "index"
                        defaultSortAsc = {false}
                        />  
                    </Col>
                    <Col sm="12">
                      <Button  className={classnames('float-right notice-btn question-btn')} onClick={e => this.setState({tempp:'삭제'})}>글쓰기</Button>
                    </Col> 
                </Row>
            </div>
        );
    }
}