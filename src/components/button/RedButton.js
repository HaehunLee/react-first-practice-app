import React, {Component} from 'react';
import './RedButton.css';

export default class RedButton extends Component{
    
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