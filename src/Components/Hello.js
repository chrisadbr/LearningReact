import React from 'react'

var name = 'Christian';
const Hello = () =>{
  /*  return (
        <div><h1>Hello {name}</h1></div>
    ) */
    return React.createElement(
        'div',
        {id:'helloId', className:'helloClass'},
        React.createElement('h3', null, `Hello ${name}`)
    )
}

export default Hello
