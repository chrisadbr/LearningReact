import React from 'react'
import Person from './Person'

function NameList() {
    const profile = [
        {
            id: 1,
            name: 'Bruce Wayne',
            age: 40,
            location: 'Ruvuma',
            jobTitle: 'Software developer'
        },
        {
            id: 2,
            name: 'Roger Miller',
            age: 60,
            location: 'Younde',
            jobTitle: 'Retired footballer'
        },
        {
            id: 3,
            name: 'Paul George',
            age: 29,
            location: 'Los angeles',
            jobTitle: 'Pro basketball player'
        },
        {
            id: 4,
            name: 'TD Jakes',
            age: 65,
            location: 'Atlanta',
            jobTitle: 'Reverend'
        }
    ]
    const personList = profile.map((person, index) => <Person key = {index} person = {person} />)
    return <div>{ personList }</div>
}

export default NameList
