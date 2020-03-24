import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from 'react-image'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import styles from './slide.module.scss'

function Slide(props) {
  const [index, setIndex] = useState(0)
  const [indexSecond, setIndexSecond] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleSelectSecond = (selectedIndex, e) => {
    setIndexSecond(selectedIndex)
  }

  return (
    <div className={styles.container}>
      <Container fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={6} className={styles.col}>
            <div className={styles.Card}>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                className={styles.carousel}
              >
                <Carousel.Item>
                  <h4>
                    Emrit's Host Kit
                    <span className={styles.span}>
                      (Waitlist For May Batch)
                    </span>
                  </h4>
                  <div className={styles.imgContainer}>
                    <Img
                      src={require('../../assets/carousel_1/Helium_hotspot.png')}
                      className={styles.headerImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.list}>
                      <ul>
                        <li>
                          Hotspot device (1 hotspot per installation address)
                        </li>
                        <li>Power cable</li>
                        <li>1.2dBi antenna</li>
                        <li> Free merch</li>
                      </ul>
                    </h3>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button className={styles.button}>
                      Claim your free hotspot now
                    </Button>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>
                    Emrit's Host Kit
                    <span className={styles.span}>
                      (Waitlist For May Batch)
                    </span>
                  </h4>
                  <div className={styles.imgContainer}>
                    <Img
                      src={require('../../assets/carousel_1/Helium_window.png')}
                      className={styles.headerImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.list}>
                      <ul>
                        <li>
                          Hotspot device (1 hotspot per installation address)
                        </li>
                        <li>Power cable</li>
                        <li>1.2dBi antenna</li>
                        <li> Free merch</li>
                      </ul>
                    </h3>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button className={styles.button}>
                      Claim your free hotspot now
                    </Button>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>
                    Emrit's Host Kit
                    <span className={styles.span}>
                      (Waitlist For May Batch)
                    </span>
                  </h4>
                  <div className={styles.imgContainer}>
                    <Img
                      src={require('../../assets/carousel_1/Hotspot_house.jpg')}
                      className={styles.headerImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.list}>
                      <ul>
                        <li>
                          Hotspot device (1 hotspot per installation address)
                        </li>
                        <li>Power cable</li>
                        <li>1.2dBi antenna</li>
                        <li> Free merch</li>
                      </ul>
                    </h3>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button className={styles.button}>
                      Claim your free hotspot now
                    </Button>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className={styles.col}>
            <div className={styles.Card}>
              <Carousel
                activeIndex={indexSecond}
                onSelect={handleSelectSecond}
                indicators={false}
              >
                <Carousel.Item>
                  <div className={styles.imgContainerRight}>
                    <Img
                      src={require('../../assets/carousel_1/Bicycle.png')}
                      className={styles.headerImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>Micromobility Tracking</h3>
                    <h4>
                      From scooters to skateboards, from bikes to cars –
                      micromobility solutions are taking the world by storm.
                      With Helium, protecting your assets and your customers is
                      simple and cost-effective.
                    </h4>
                    <p>
                      Helium-enabled devices require no cellular contracts to
                      relay sensor data back to your application. And using the
                      standard Helium radio module, devices can be natively
                      geolocated without the need for power-hungry cellular.
                    </p>
                  </div>
                  <div className={styles.footerImageContainer}>
                    <Img
                      className={styles.footerImage}
                      src={require('../../assets/carousel_1/mobilitystats.svg')}
                    />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className={styles.imgContainerRight}>
                    <Img
                      src={require('../../assets/carousel_1/dog.png')}
                      className={styles.headerImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>Invisileash</h3>
                    <h4>
                      Their smart collars allow owners to monitor their pet’s
                      location in real time even over many miles of distance
                      using sub-Ghz frequency running on a ubiquitous,
                      affordable network.
                    </h4>
                    <p>
                      Using Helium, there's no need to change batteries for
                      years, since the network has embedded tracking which
                      provides accurate location without power-hungry and
                      expensive GPS or cellular components.
                    </p>
                  </div>
                  <div className={styles.footerImageContainer}>
                    <Img
                      className={styles.footerImage}
                      src={require('../../assets/carousel_1/invisileash_navy.svg')}
                    />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className={styles.imgContainerRight}>
                    <Img
                      src={require('../../assets/carousel_1/Low_stock.png')}
                      className={styles.headerImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>Nestle</h3>
                    <h4>
                      Nestle’s ReadyRefresh business unit is a beverage delivery
                      service that provides refreshments to homes and
                      businesses.
                    </h4>
                    <p>
                      Nestle was looking for ways to proactively serve customers
                      before they ran out of water to improve customer
                      satisfaction and increase the amount of water sold.
                    </p>
                    <p>
                      Helium and our development partners built a retrofit kit
                      that could be deployed quickly by field staff to add
                      connectivity to water coolers. This capability delivers a
                      real-time view of fill levels extending the level of
                      service they can offer customers.
                    </p>
                  </div>
                  <div className={styles.footerImageContainer}>
                    <Img
                      src={require('../../assets/carousel_1/nestlestats.svg')}
                      className={styles.footerImage}
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Slide
