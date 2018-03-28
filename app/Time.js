import React, {Component} from 'react'

export class TimeRest extends Component {
    constructor(props){
        super(props)
        this.state = {
            number: 20
        }
    }

    timeRestNumber(){
        const {number} = this.state
        this.setState({number: number - 1})
    }

    render(){
        return (
            <div>{this.state.number}</div>
        )
    }
}