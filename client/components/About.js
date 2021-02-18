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
    <div className="about-container">
      <div>
        <h4 className="about-title">What is Omakase?</h4>
        <p className="about-explanation">
          Omakase was created to make it easier for music lovers to discover new
          songs and create playlists. With Omakase, you can quickly build a new
          playlist or add on to existing Spotify playlists. We had a lot of fun
          building Omakase and hope you have as much fun using it!
        </p>
      </div>
      <div>
        <h4 className="about-title">Meet the Team!</h4>
        <div className="about-photo-gallery">
          {shuffledArray.map(user => (
            <div
              style={{backgroundImage: `url(${user.img})`}}
              key={user.id}
              alt={user.name}
              className={`team-member ${user.class}`}
            >
              <div className="about-content-container">
                <div className="team-member-name">{user.name}</div>
                <div className="f jcc">
                  <a
                    href={user.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="about-link-container-git"
                    alt={`${user.name} Git Hub`}
                  >
                    <GitHub className="about-link" />
                  </a>
                  <a
                    href={user.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="about-link-container-link"
                    alt={`${user.name} Linked In`}
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
