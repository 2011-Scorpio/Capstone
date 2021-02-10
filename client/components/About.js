import React from 'react'

const usersInfo = [
  {
    name: 'Azriel Goldman',
    gitHub: 'https://github.com/azrielg20',
    linkedIn: 'https://www.linkedin.com/in/azriel-goldman-67193b77/'
  },
  {
    name: 'Gabriel Smith',
    gitHub: 'https://github.com/gabesmithp',
    linkedIn: 'https://www.linkedin.com/in/gabesmithp/'
  },
  {
    name: 'Spencer Collins',
    gitHub: 'https://github.com/spibcol',
    linkedIn: 'https://www.linkedin.com/in/smcollins36/'
  },
  {
    name: 'Alfred Meng',
    gitHub: 'https://github.com/alfredfmeng',
    linkedIn: 'http://www.linkedin.com/in/alfredfmeng'
  }
]

const About = () => {
  return (
    <div>
      {usersInfo.map(user => (
        <div key={user.id}>
          <div>Name: {user.name}</div>
          <a href={user.gitHub}>Github Profile</a>
          <a href={user.linkedIn}>LinkedIn Profile</a>
        </div>
      ))}
    </div>
  )
}

export default About
