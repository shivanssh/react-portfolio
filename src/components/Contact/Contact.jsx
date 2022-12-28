import Loader from 'react-loaders'
import './Contact.scss'
import AnimatedLetters from './../AnimatedLetters/AnimatedLetters'
import { useRef, useState } from 'react'
import { convertToArray } from '../../utils/helper'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterState, setLetterState] = useState('text-animate')
  const refForm = useRef()

  useState(() => {
    setTimeout(() => {
      setLetterState('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        refForm.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again after sometime')
        }
      )
  }

  const contactArray = convertToArray('Contact me')

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterState}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            Please do not fill and send any data. These is just a dummy contact
            form for exploring the concepts of EmailJS.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half-row">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
