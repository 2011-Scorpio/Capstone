import React from 'react'

const usersInfo = [
  {name: 'Azriel Goldman', gitHub: '', linkedIn: ''},
  {name: 'Gabriel Smith', gitHub: '', linkedIn: ''},
  {name: 'Spencer Collins', gitHub: '', linkedIn: ''},
  {name: 'Alfred Meng', gitHub: '', linkedIn: ''}
]

const About = () => {
  return (
    <div>
      {usersInfo.map(user => (
        <div key={user.id}>
          <div>Name: {user.name}</div>
          <div>Github Profile: {user.gitHub}</div>
          <div>LinkedIn Profile: {user.linkedIn}</div>
        </div>
      ))}
    </div>
  )
}

export default About
