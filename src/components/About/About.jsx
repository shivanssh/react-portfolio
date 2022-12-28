import './About.scss'
import AnimatedLetters from './../AnimatedLetters/AnimatedLetters'
import { convertToArray } from '../../utils/helper'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGitAlt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterState, setLetterState] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterState('text-animate-hover')
    }, 3000)
  }, [])
  const aboutArray = convertToArray('About me')
  const skills = [
    { font: faHtml5 },
    { font: faCss3, color: '#F06529' },
    { font: faJsSquare, color: '#28A4D9' },
    { font: faReact, color: '#5ED4F4' },
    { font: faGitAlt, color: '#EFD81D' },
    { font: faNodeJs, color: '#5ED4F4' },
  ]

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterState}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm MERN full stack developer with expertise in JavaScript, ReactJS,
            NodeJS, ExpressJS and MongoDB
          </p>
          <p>Good with developing and designing of web applications.</p>
          <p>
            Have developed and modified more than 5 project in ReactJS for the
            component to be more effective and optimized. For example using
            De-bouncing, Auto-scripts and more.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {skills.map((skill, i) => {
              return (
                <div className={`face${i + 1}`} key={i}>
                  <FontAwesomeIcon icon={skill.font} color={skill.color} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
