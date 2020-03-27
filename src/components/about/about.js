import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './about.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'

function About(props) {
  return (
    <div id="about" className={styles.container}>
      <Container className={styles.fluidContainer} fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={6} className={styles.col}>
            <div className={styles.leftContainer}>
              <h2> Adopt a FREE Hotspot</h2>
              <p>
                At Emrit, we are on a mission to create the largest network of
                Helium Hotspots, cultivating a community of advanced operators
                and users, in order for Emrit hotspots to rise to the top of the
                Helium community. #teamemrit
              </p>
              <p>
                With your help, we can expand #ThePeoplesNetwork across the
                globe. Our network is forming the basis of LoRaWAN IoT
                capabilities saving everyone immense sums of money and
                propelling our society forward in new and exciting ways. As the
                largest distributor of Helium Hotspots, our hope at Emrit is to
                be able to have the most optimized contributing hotspots, as
                well as be the go to co-developing partner with Helium for the
                community.
              </p>
              <p>
                To thank you for your adoption, we would like to reward you with
                a FREE hotspot (one per street address, 300 meters apart
                physically), FREE shipping (within USA/CAN), 100 HNT tokens for
                activation, and ongoing REVENUE SHARE (20% if the Hotspot’s
                earning as long as the hotspot is running with you). We also
                have referral programs in place. Essentially, these rewards are
                a ‘thank you’ for using the FREE provided Hotspots which help us
                achieve our vision of a more connected future, powering the IOT
                future, with you!
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className={styles.col}>
            <div className={styles.rightContainer}>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/qx-GghvwV6A"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              {/* <iframe
                width="100%"
                height="300"
                // src="https://www.youtube.com/embed/yiWbWFqLDiE"
                src="https://www.youtube.com/watch?v=qx-GghvwV6A"
                frameborder="0"
                allow="autoplay;"
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
