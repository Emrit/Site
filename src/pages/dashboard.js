import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './signup.module.scss'
import Img from 'react-image'
import { useLocation } from 'gatsby'

function Dashboard(props) {
  return (
    <>
      <div className={styles.header}>
        <Img
          onClick={() => {
            props.navigate('/')
          }}
          src={require('../assets/signup/back.svg')}
          className={styles.backButton}
          decode={false}
        />

        <Img
          src={require('../assets/logo-nav.svg')}
          className={styles.image}
          decode={false}
        />
      </div>
      <div className={styles.container}>Dashboard</div>
    </>
  )
}

export default Dashboard
