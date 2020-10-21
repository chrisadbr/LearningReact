import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome Christian</div>
        // return this.state.isLoggedIn ? 
        //     (<div>Welcome Christian</div>) :
        //     (<div>Welcome guest</div>)
        // return (
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Christian</div> :
        //     <div>Welcome Guest</div>
        // )
        // let message;
        // if (this.state.isLoggedIn)
        //     message = <div>Welcome Christian</div>
        // else 
        //     message = <div>Welcome Guest</div>
        // return message
        // if (this.state.isLoggedIn){
        //     return <div>Welcome Christian</div>
        // }else{
        //     return <div>Welcome guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Christian</div>
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
