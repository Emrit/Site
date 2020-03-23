import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './faq.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Img from 'react-image'

function Faq(props) {
  const [content, setContent] = useState(0)

  const renderContent = () => {
    if (content === 0) {
      return (
        <>
          <h2> WHAT IS A HELIUM HOTSPOT? WHY SHOULD I WANT ONE? </h2>
          <p>
            At Emrit, we are forming the largest network of Helium Hotspots to
            create more reliable and higher scoring devices. Each of our
            Hotspots will earn a higher percentage of Helium Network Tokens than
            other, unreliable Hotspots.
          </p>
        </>
      )
    } else if (content === 1) {
      return (
        <>
          <h2> WHY DOES THE HOTSPOT NEED MY WIFI NETWORK? </h2>
          <p>
            Connecting to the internet via WiFi or Ethernet is essential because
            the connection is used to provide backhaul to the Hotspot for
            blockchain peer-to-peer and LongFi networking. LongFi networking
            utilizes radio waves to enable low-bandwidth IoT devices to connect
            to the internet at ranges 200X that of regular WiFi. Essentially,
            the Hotspot acts as an extension of your WiFi to these low bandwidth
            IoT devices. The Hotspots use very little data and energy which
            means that your internet connection won’t slow down, and your
            electricity bill won’t skyrocket. Security is Helium’s highest
            priority and, as a result, they are constantly working to maintain
            and improve all aspects of the network’s security.
          </p>
        </>
      )
    } else if (content === 2) {
      return (
        <>
          <h2> HOW DO I INSTALL THE HOTSPOT?</h2>
          <p>
            At Emrit, we know that installation often proves to be a challenging
            task as technology is tricky. That’s why we’ve preconfigured your
            Hotspot that will be shipped directly to you. In order to provide
            the strongest coverage, you should aim to set your Hotspot up as
            high as possible overlooking wide-open spaces. Please be aware that
            large buildings and/or metallic nets positioned in front of the
            hotspot may weaken its coverage capabilities.
          </p>
          <p>
            So, besides completing the order form with your correct information,
            what else do you need to do? Helium Hotspots just need to be plugged
            into a power source and be connected to WiFi or plugged into an
            Ethernet port. Once plugged in, you’ll be a part of the network and
            start earning right away!
          </p>
        </>
      )
    } else if (content === 3) {
      return (
        <>
          <h2> WHAT IF I MOVE?</h2>
          <p>
            Devices are uniquely pinned to their location in order to uphold
            network validity and integrity. Therefore, there is no way to change
            the pinned location remotely. If a host needs to move the Hotspot to
            a new address, Emrit will provide a return shipping label for the
            original Hotspot and ship a new Hotspot with your updated address.
            Moving devices within a home, say from one window to another, is not
            a problem. Feel free to try to optimize your earning. Your Hotspot
            should be positioned to best suit your needs and unique geographical
            situation. It may take time for you to fully optimize your Hotspot’s
            earning potential; however, don’t be discouraged as there are plenty
            of resources available to learn how to best position your Hotspot.
          </p>
        </>
      )
    } else if (content === 4) {
      return (
        <>
          <h2> HOW SECURE IS THIS DEVICE ON MY NETWORK? </h2>
          <p>
            <ul>
              <li>
                Very secure. The internet connection that you provide the
                Hotspot is only used to connect your device to the Helium
                blockchain in the cloud. In addition, each hotspot:
              </li>
              <li>Is hardware secured with encryption at the chip level.</li>
              <li>
                Only requires one port open in both directions which minimizes
                the most common attack vector to get into a device like a
                Hotspot via inbound ports.
              </li>
              <li>
                Communicates text message size data over LongFi protocol, not IP
                (Internet Protocol)
              </li>
              <li>
                Charges for data transfer, which your Hotspot will earn, which
                deters hackers to find cheaper targets.
              </li>
              <li>
                Is constantly being penetration tested along with all other
                parts of the Helium Network.
              </li>
            </ul>
          </p>
        </>
      )
    } else if (content === 5) {
      return (
        <>
          <h2> HOW CAN I MAKE A PROFIT?</h2>
          <p>
            Being an early adopter gives you access to monetization through the
            building and maintaining of the network. As the network is being
            built, Helium Network Tokens (HNT) will be allocated to Hotspot
            hosts for building and securing network coverage. Essentially, this
            is a way to thank those who got in early and helped materialize
            #ThePeoplesNetwork.
          </p>
          <p>
            As the network grows and more Hotspots are added, you can also earn
            more HNT for transferring end-to-end encrypted device data on the
            network. HNT is your reward for hosting and being an active,
            valuable participant in the Helium Network. Operators of devices and
            sensors on the Helium Network will require HNT to send encrypted
            data across the network, thereby creating intrinsic value for each
            token. In addition, there are many ways to boost your earning
            capabilities.
          </p>
        </>
      )
    } else if (content === 6) {
      return (
        <>
          <h2> HOW CAN I EARN EVEN MORE TOKENS?</h2>
          <p>
            At Emrit, we see value in the network effect. The network effect
            describes how something gains in value as it gains users. So, to
            optimize the earnings and value of each Hotspot, we’ve created a
            referral program to specifically target this network effect. As a
            current host, you’ll have the opportunity to refer friends, family,
            or anyone to join the Emrit program. By referring others, you’ll
            receive additional HNT and increase the value of the network as a
            whole. A second way is to optimize your Hotspot by moving it into
            higher, clearer spaces. Finally, Hotspot upgrade kits will soon
            become available to hosts as a way to supercharge their devices.
            Add-ons like antenna upgrades will enable your Hotspot to have a
            stronger and farther reach which equates to more HNT being mined.
          </p>
        </>
      )
    } else if (content === 7) {
      return (
        <>
          <p>
            Website: Helium.com | Earnings: Dashboard.Helium.com | Map:
            Network.Helium.com
          </p>
          <p>
            For Developers:
            <a href="https://developer.helium.com/" target="__blank">
              {' '}
              https://developer.helium.com/{' '}
            </a>
            <ul>
              <li>
                Learn how to communicate with your devices on the network.
              </li>
              <li>
                Learn how to connect your devices to communicate with each other
                on the network.
              </li>
              <li>Learn more about the blockchain that powers the network.</li>
              <li>
                Learn more about the Helium Hotspot that provides the network.
              </li>
              <li>
                Learn how LongFi combines the Helium blockchain with LoRaWAN
                wireless protocol
              </li>
            </ul>
          </p>
        </>
      )
    }
  }

  return (
    <div className={styles.container}>
      <h2> FAQ </h2>
      <Container className={styles.fluidContainer} fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={2} className={styles.col}>
            <div className={styles.rightContainer}>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(0)
                }}
              >
                <Img
                  src={require('../../assets/What is this copy.svg')}
                  className={styles.Img}
                />
                <h3> What is this?</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(1)
                }}
              >
                <Img
                  src={require('../../assets/Why my wifi icon.svg')}
                  className={styles.Img}
                />
                <h3> Why my wifi?</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(2)
                }}
              >
                <Img
                  src={require('../../assets/Installment icon.svg')}
                  className={styles.Img}
                />
                <h3> Installation</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(3)
                }}
              >
                <Img
                  src={require('../../assets/Relocation icon.svg')}
                  className={styles.Img}
                />
                <h3> Relocation</h3>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={8} className={styles.col}>
            <div className={styles.leftContainer}>{renderContent()}</div>
          </Col>
          <Col xs={12} md={12} lg={2} className={styles.col}>
            <div className={styles.rightContainer}>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(4)
                }}
              >
                <Img
                  src={require('../../assets/Security_icon.svg')}
                  className={styles.Img}
                />
                <h3> Security</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(5)
                }}
              >
                <Img
                  src={require('../../assets/Earn icon.svg')}
                  className={styles.Img}
                />
                <h3> Earnings</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(6)
                }}
              >
                <Img
                  src={require('../../assets/Earn more icon.svg')}
                  className={styles.Img}
                />
                <h3> Earning More</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(7)
                }}
              >
                <Img
                  src={require('../../assets/More icon.svg')}
                  className={styles.Img}
                />
                <h3> More helium info</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
