import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Notice.css'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Question from './Question';
import Notice from './Notice';
import Answer from './Answer';


export default class Partners extends Component{

    constructor(props) {
        super(props);

        console.log("## 컴포넌트가 만들어짐 ##");
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          title : '공지하기',
          name : '',
          selected: {}, 
          selectAll: 0, 
          tempp : '',
        };
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
          
        }
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
                <h4 id="parter-title">파트너관리</h4>
                <Nav tabs>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    {this.state.title}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    문의하기
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    답변하기
                    </NavLink>
                </NavItem>
                </Nav>

                
                <TabContent activeTab={this.state.activeTab}>
                
                <TabPane tabId="1">
                  <Notice />
                </TabPane>

                <TabPane tabId="2">
                    <Question data="test" />
                </TabPane>
                
                <TabPane tabId="3">
                    <Answer />
                </TabPane>
                
                </TabContent>
            </div>
        );
    }
}