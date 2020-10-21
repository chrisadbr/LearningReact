import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        // Incase we are dealing with the state here 
        // is the syntax
        // const {state1, state2} = this.state
        return <p>Hello {name} aka {heroName} </p>
    }
}
export default Welcome 