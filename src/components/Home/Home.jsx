/* eslint-disable no-unused-vars */
import './Home.scss';
import DevLogo from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { convertToArray } from '../../utils/helper';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterState, setLetterState]= useState('text-animate')

  const nameArray = convertToArray('hivansh')
  const jobArray = convertToArray('web developer.')

  useEffect(()=>{
    setTimeout(() => {
      setLetterState('text-animate-hover')
    }, 4000);
  },[])
  return (
    <>
    <div className='container home-page'>
      <div className="text-zone">
        <h1>
        <span className={`${letterState}`} >H</span>  
        <span className={`${letterState} _12`} >i,</span>  
        <br />
        <span className={`${letterState} _13`} >I</span>  
        <span className={`${letterState} _14`} >'m</span>  
      
        <img src={DevLogo} alt="developer" />
        <AnimatedLetters letterClass={letterState} strArray={nameArray} idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterState} strArray={jobArray} idx={22}/>
        </h1>
        <h2>MERN-Full Stack Developer / JavaScript Expert</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
        <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
    
  );
};

export default Home;