import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './caseStudy.module.scss'
import Img from 'react-image'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Table from './table'
import Slide from './slide'

function CaseStudy(props) {
  return (
    <div className={styles.container}>
      <Container className={styles.fluidContainer} fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={4} className={styles.col}></Col>
          <Col xs={12} md={12} lg={4} className={styles.col}>
            <div className={styles.leftContainer}>
              <h2> Why Helium?</h2>
              <p>
                {' '}
                Helium helps companies solve connectivity challenges without
                expensive cell plans or worrying about building and maintaining
                wireless infrastructure.
              </p>
              <Button className={styles.button}> Contact Sales </Button>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4} className={styles.col}></Col>
        </Row>
      </Container>
      <div className={styles.descriptions}>
        <Container fluid>
          <Row className={styles.row}>
            <Col xs={12} md={12} lg={1} className={styles.col}></Col>
            <Col xs={12} md={12} lg={10} className={styles.col}>
              <div className={styles.header}>
                <Img
                  className={styles.img}
                  src={require('../../assets/techrange.svg')}
                />
                <h4> Range </h4>
              </div>
              <div className={styles.contentContainer}>
                <p>
                  Range is optimized for devices running on Helium LongFi. This
                  opens up a number of use cases including asset tracking,
                  supply chain/logistics, and agricultural technology.
                </p>
              </div>
              <div className={styles.leftBarContainer}>
                <div className={styles.leftBar}>
                  <p className={styles.leftBarText}>LONGFI (10+ MILES)</p>
                  <div className={styles.barTop}>
                    <div className={styles.fillLeftTop} />
                    <div className={styles.fillRight} />
                  </div>
                </div>
                <div className={styles.leftBar}>
                  <p className={styles.leftBarText}>WI-FI (300FT)</p>
                  <div className={styles.barTop}>
                    <div className={styles.fillLeftMiddle} />
                    <div className={styles.fillRight} />
                  </div>
                </div>
                <div className={styles.leftBar}>
                  <p className={styles.leftBarText}>BLUETOOTH (30FT)</p>
                  <div className={styles.barTop}>
                    <div className={styles.fillLeftBottom} />
                    <div className={styles.fillRight} />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={1} className={styles.col}></Col>
          </Row>
        </Container>
      </div>
      <div className={styles.descriptions}>
        <Container fluid>
          <Row className={styles.row}>
            <Col xs={12} md={12} lg={1} className={styles.col}></Col>
            <Col xs={12} md={12} lg={10} className={styles.col}>
              <div className={styles.header}>
                <Img
                  className={styles.img}
                  src={require('../../assets/techpricing.svg')}
                />
                <h4> Pricing </h4>
              </div>
              <div className={styles.contentContainer}>
                <p>
                  Unlike cellular, with Helium companies never have to pay for
                  sim cards, manage around data caps, or get charged for data
                  overage.
                  <br />
                  Helium provides the ability to pay based on device usage, and
                  pool data across devices, no matter how few or many.
                </p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={1} className={styles.col}></Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid>
          <Row className={styles.row}>
            <Col xs={12} md={12} lg={1} className={styles.col}></Col>
            <Col xs={12} md={12} lg={8} className={styles.col}>
              <Table />
            </Col>
            <Col xs={12} md={12} lg={3} className={styles.col}></Col>
          </Row>
        </Container>
      </div>
      <div className={styles.slideContainer}>
        <Container fluid>
          <Row className={styles.row}>
            <Col xs={12} md={12} lg={2} className={styles.col}></Col>
            <Col xs={12} md={12} lg={8} className={styles.col}>
              <Slide />
            </Col>
            <Col xs={12} md={12} lg={2} className={styles.col}></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default CaseStudy
