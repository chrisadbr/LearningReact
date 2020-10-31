import React, { Component } from 'react';
import './App.css';
// import Inline from './Components/Inline';
// import Stylesheet from './Components/Stylesheet';

// import NameList from './Components/NameList';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import FunctionClick from './Components/FunctionClick';
// import Counter from './Components/Counter';
// import Greet from './Components/Greet';
// import Hello from './Components/Hello';
// import Message from './Components/Message';
// import Welcome from './Components/Welcome';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';

class  App extends Component{
  render() {
    return (
      <div className="App">
        <LifeCycleA />
        {/* <Form /> */}
        {/* <Inline />
        <h1 className = 'error'>Error</h1>
        <h1 className = {styles.success}>Success</h1> */}
        {/* <Stylesheet primary = {true}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name = 'Bruce' heroName = 'Batman'>
         <p>This is the children component</p>
        </Greet>
        <Welcome name = 'John' heroName = 'Captain America'/> */}
        {/* <Greet name = 'Clark' heroName = 'Superman'>
         <button>Action</button>
        </Greet>
        <Greet name = 'Diana' heroName = 'Wonder Woman'/>
        <Welcome name = 'Clark' heroName = 'Xmen'/>
        <Welcome name = 'Wayne' heroName = 'Ironman'/>
        <Hello name/> */}
      </div>
    )
  }
}

export default App;
