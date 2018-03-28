import React, {Component} from 'react'
import { Input } from 'antd';

export default class Queen extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }
    render(){
        return <div>
                {
                    this.props.isShow ?
                    <div>
                        <br/>
                        <div>孔子东游见两小儿辩日</div>
                        <br/>
                        <span>你就是小儿，说吧:</span> <Input value={this.state.value}
                            onChange={(e)=>{this.setState({value: e.target.value})}}
                            onBlur={(e)=>{this.props.childSpeak(e.target.value)
                                this.setState({value: ""})}}
                            /> 
                    </div>
                    : null
                }
            </div>
    }
} 