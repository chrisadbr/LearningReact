import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: ''
        }
        console.log('LifeCycleB: Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB: getDerivedStateFromProp')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleB: componentDidMount')
    }
    render() {
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
