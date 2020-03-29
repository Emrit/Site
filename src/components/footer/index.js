import { Link } from 'gatsby'
import React from 'react'
import Img from 'react-image'
import styles from './footer.module.scss'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className={styles.container}>
    <div className={styles.iconsContainer}>
      <a href="#">
        <Img
          src={require('../../assets/footer/github.svg')}
          className={styles.footerIcon}
          decode={false}
        />
      </a>
      <a href="#">
        <Img
          src={require('../../assets/footer/facebook.svg')}
          className={styles.footerIcon}
          decode={false}
        />
      </a>
      <a href="#">
        <Img
          src={require('../../assets/footer/twitter.svg')}
          className={styles.footerIcon}
          decode={false}
        />
      </a>
      <a href="#">
        <Img
          src={require('../../assets/footer/mail.svg')}
          className={styles.footerIcon}
          decode={false}
        />
      </a>
    </div>
    <div className={styles.textContainer}>
      <a href="#">© WHAT CAN I DO TO EARN MORE HELIUM VIA THIS HOST PROGRAM?</a>
    </div>
    <div className={styles.textContainer}>
      <a href="#"> Spread the word, spread the network!</a>
    </div>
    <div className={styles.textContainer}>
      <a href="mailto:adi@emrit.iofor">
        - Refer a friend to earn additional helium. Please email adi@emrit.iofor
        further details.
      </a>
    </div>
  </div>
)

export default Footer
