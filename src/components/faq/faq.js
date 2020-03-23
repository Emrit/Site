import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './faq.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'

function About(props) {
  return (
    <div className={styles.container}>
      <Container className={styles.fluidContainer}>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={6} className={styles.col}>
            <div className={styles.leftContainer}>
              <h2> Adopt a FREE Hotspot</h2>
              <p>
                At Emrit, we are forming the largest network of Helium Hotspots
                to create more reliable and higher scoring devices. Each of our
                Hotspots will earn a higher percentage of Helium Network Tokens
                than other, unreliable Hotspots.
              </p>
              <p>
                With your help, we can expand #ThePeoplesNetwork across the
                globe. Our network could form the basis of future LongFi IoT
                capabilities saving everyone immense sums of money and
                propelling our society forward in new and exciting ways. As the
                largest distributor of Helium Hotspots, our hope is to be able
                to have the best network with the highest level of Hotspot
                validity and integrity.
              </p>
              <p>
                To thank you for your adoption, we would like to reward you with
                a FREE hotspot (one per street address, 300 meters apart), FREE
                shipping (within USA/CAN), 100 HNT tokens for activation, and
                REVENUE SHARE (20% if the Hotspot’s earning as long as you
                host). We also have referral programs in place. Essentially,
                these rewards are a thank you for using the FREE provided
                Hotspots which help us achieve our vision of a more connected
                future.
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className={styles.col}>
            <div className={styles.rightContainer}>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/yiWbWFqLDiE"
                frameborder="0"
                allow="autoplay;"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
