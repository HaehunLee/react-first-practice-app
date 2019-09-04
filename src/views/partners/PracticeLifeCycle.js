import React, {Component} from 'react';

export default class PracticeLifeCycle extends Component{

    // props : 변동되지 않는 데이터를 다룰 때 사용.
    constructor(props){
        super(props);
        console.log("constructor: render 전에 기본 state를 정할 수 있는 생성자 메소드");
    }

    // 컴포넌트가 DOM 위에 만들어지기 전에 실행 ( will은 사용하지 않는다고 함.)
    // componentWillMount(){
    //     console.log("componentWillMount");
    // }
    
    // componentDidMount : 렌더링 후에 실행되는 메소드
    componentDidMount(){
        console.log("componentDidMount : js 프레임워크 연동, setTimeout, setinterval 및 AJAX 처리 담당.");
    }

    // componentWillReceiveProps : prop 변경 시 실행
    // componentWillReceiveProps(nextProps){
    //     console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    // }

    // shouldComponentUpdate : prop, state 변경 시 리렌더링 여부 정하는 메소드
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }

    // componentWillUpdate
    // componentWillUpdate(nextProps, nextState){
    //     console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    // }

    // componentDidUpdate : 리렌더링 후에 실행
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }

    // componentWillUnmount : 컴포넌트가 DOM에서 사라진 후 실행되는 메소드.
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    // render
    // 렌더링 담당
    render(){
        return(
            <div>
                <h3 id="h1test">테스트 버튼 구조</h3>
                <nav>
                    <button id="btn1">버튼1</button>
                    <button id="btn2">버튼2</button>
                    <button id="btn3">버튼3</button>
                </nav>
                <div id="body1">
                    <p>첫 화면</p>
                    <p>첫 화면</p>
                    <p>첫 화면</p>
                </div>
            </div>
        );
    }
}