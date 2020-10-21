
import React from 'react'

//function Greet() {
    //return (
      //  <h1>Hello Christian</h1>
    //)
//}
// const Greet = (props) => {
//   //console.log(props)
//   return (
//     <div>
//       <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//       {props.children}
//     </div>
//   )}
// One way to destructure props
// const Greet = ({name, heroName}) => {
//   return (
//     <div>
//       <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>
//   )
// }
// second way to destructure props
const Greet = (props) =>{
    const {name, heroName} = props
    return (
      <div>
        <p>Hello {name} aka {heroName}</p>
      </div>
    )
}
export default Greet
