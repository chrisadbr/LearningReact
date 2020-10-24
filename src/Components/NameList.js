import React from 'react'
import Person from './Person'

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
    const personList = profile.map(person => <Person person = {person} />)
    return <div>{ personList }</div>
}

export default NameList
