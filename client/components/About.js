import React from 'react'
import {GitHub, Linkedin} from 'react-feather'

const usersInfo = [
  {
    id: 1,
    name: 'Azriel',
    gitHub: 'https://github.com/azrielg20',
    linkedIn: 'https://www.linkedin.com/in/azriel-goldman-67193b77/',
    class: 'azriel-img',
    img: '/images/azriel.jpg'
  },
  {
    id: 2,
    name: 'Gabriel',
    gitHub: 'https://github.com/gabesmithp',
    linkedIn: 'https://www.linkedin.com/in/gabesmithp/',
    class: 'gabe-img',
    img: '/images/gabe.png'
  },
  {
    id: 3,
    name: 'Spencer',
    gitHub: 'https://github.com/spibcol',
    linkedIn: 'https://www.linkedin.com/in/smcollins36/',
    class: 'spencer-img',
    img: '/images/spencer.jpg'
  },
  {
    id: 4,
    name: 'Alfred',
    gitHub: 'https://github.com/alfredfmeng',
    linkedIn: 'http://www.linkedin.com/in/alfredfmeng',
    class: 'alfred-img',
    img: '/images/alfred.jpg'
  }
]

const About = () => {
  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5)
  }
  const shuffledArray = shuffle(usersInfo)
  return (
    <div className="about-wrapper">
      <div>
        <h4 className="about-title">What is Omakase?</h4>
        <p className="about-explanation">
          We built Omakase to make it easier for people to discover new music
          and create playlists. Using the Spotify API we were able blah blah
          blah blah and we really hope you like it!
        </p>
      </div>
      <div>
        <h4 className="about-title">Meet the Team</h4>
        <div className="about-photo-gallery">
          {shuffledArray.map(user => (
            <div
              style={{backgroundImage: `url(${user.img})`}}
              key={user.id}
              className={`team-member ${user.class}`}
            >
              <div className="about-content-container">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
