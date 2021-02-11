import React from 'react'
import {GitHub, Linkedin} from 'react-feather'

const usersInfo = [
  {
    id: 1,
    name: 'Azriel',
    gitHub: 'https://github.com/azrielg20',
    linkedIn: 'https://www.linkedin.com/in/azriel-goldman-67193b77/',
    class: 'azriel-img'
  },
  {
    id: 2,
    name: 'Gabriel',
    gitHub: 'https://github.com/gabesmithp',
    linkedIn: 'https://www.linkedin.com/in/gabesmithp/',
    class: 'gabe-img'
  },
  {
    id: 3,
    name: 'Spencer',
    gitHub: 'https://github.com/spibcol',
    linkedIn: 'https://www.linkedin.com/in/smcollins36/',
    class: 'spencer-img'
  },
  {
    id: 4,
    name: 'Alfred',
    gitHub: 'https://github.com/alfredfmeng',
    linkedIn: 'http://www.linkedin.com/in/alfredfmeng',
    class: 'alfred-img'
  }
]

const About = () => {
  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5)
  }
  const shuffledArray = shuffle(usersInfo)
  return (
    <>
      <h4 className="about-title">Meet the Team</h4>
      <div className="about-container">
        {shuffledArray.map(user => (
          <div key={user.id} className={`team-member ${user.class}`}>
            <div className="team-member-name">{user.name}</div>
            <div className="f jcc">
              <a
                href={user.gitHub}
                target="_blank"
                rel="noreferrer"
                className="about-link-container"
              >
                <GitHub className="about-link" />
              </a>
              <a
                href={user.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="about-link-container"
              >
                <Linkedin className="about-link" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default About
