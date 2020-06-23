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
      <iframe
        src="https://datastudio.google.com/embed/reporting/1ApX9g_WAETgQ9AAnbMDgGZAOUIs97WwR/page/wWBTB"
        style={{
          width: '100%',
          height: '150vh',
          border: '0',
          marginTop: '-3rem',
        }}
        allowfullscreen
      ></iframe>
    </>
  )
}

export default Dashboard
