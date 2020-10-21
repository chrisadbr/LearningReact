import React from 'react'

function NameList() {
    const profile = [
        {
            name: 'Bruce Wayne',
            age: 40,
            location: 'Ruvuma',
            jobTitle: 'Software developer'
        },
        {
            name: 'Roger Miller',
            age: 60,
            location: 'Younde',
            jobTitle: 'Retired footballer'
        },
        {
            name: 'Paul George',
            age: 29,
            location: 'Los angeles',
            jobTitle: 'Pro basketball player'
        },
        {
            name: 'TD Jakes',
            age: 65,
            location: 'Atlanta',
            jobTitle: 'Reverend'
        }
    ]
    const person = profile.map(people => (
        <p>My name is {people.name}, I live in {people.location}, Iam a {people.jobTitle}</p>
    ))
    return (
        <div>{ person }</div>
    )
}

export default NameList
