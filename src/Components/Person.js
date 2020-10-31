import React from 'react'

function Person({person}) {
    return (
        <div>
            <p>My name is { person.name }, I live in { person.location }, Iam a { person.jobTitle }</p>
        </div>
    )
}
export default Person
