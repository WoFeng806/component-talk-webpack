import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Queen from './Queen.js'
import { TimeRest } from './Time.js'

export default class Hello extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow: false,
            childSpeak: ""
        }
    }

    goodSetFirstUp(){
        this.setState({isShow: !this.state.isShow})
    }

    goodSetThecondUp(){
        // 父组件单纯只调用子组件的一个方法 
        this.refs.TimeRest.timeRestNumber()
    }

    childSpeak(value){
        this.setState({childSpeak: value})
    }

    render(){
        return (
            <div>
                <div>学海便无涯，温故而知新</div>
                <hr />
                <div>
                    父组件传入值或方法给子组件、子组件将值传给父组件
                </div>
                <button onClick = {this.goodSetFirstUp.bind(this)}>第一步</button>
                <Queen isShow={this.state.isShow} childSpeak={(value)=> {this.childSpeak(value)}}/>
                <div>{this.state.isShow ? `孔子听闻小儿曰：${this.state.childSpeak}` : ""}</div>

                <hr />

                <div>
                    子组件传入方法给子组件
                </div>
                <button onClick = {this.goodSetThecondUp.bind(this)}>第二步</button>
                <TimeRest ref="TimeRest"/>
            </div>
            
        )  
    }
}

function main(){
    ReactDOM.render(<Hello />,document.getElementById("root"))
}

main()