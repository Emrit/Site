import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './company.module.scss'
import Img from 'react-image'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Company(props) {
  const [content, setContent] = useState(0)

  const renderContent = () => {
    if (content === 0) {
      return (
        <>
          <h2> Adi Arul - Founder and CEO</h2>
          <p>
            Aditya (Adi) Arul, a 6th grader at Atlanta International School is
            set to become an entrepreneur and that too of the disruptive kind.
            Adi has been mining cryptocurrencies in his basement at the age of
            10. Aditya’s strong interest in mining and his interest in investing
            in blockchain startups evolved into the decision to start his own
            company. Adi bootstrapped Emrit. Some of his interests include Golf,
            Blockchain, VR and video games.
          </p>
          <p>
            <a href="https://www.americaninno.com/atlanta/inno-insights/atlanta-innos-25-under-25-2/">
              <strong>
                Adi Arul - Atlanta Business Chronicle Top 25 Entrepreneur under
                25{' '}
              </strong>{' '}
            </a>
          </p>
          <p>
            <a href="https://schedule.sxsw.com/2020/events/PP104922">
              <strong> Adi Arul SXSW 2020 speaker invitation</strong>{' '}
            </a>
          </p>

          <p>
            <a href="https://www.linkedin.com/posts/cynthiagcurry_growatlanta-entrepreneurkids-activity-6569956885519233024-i-jd/">
              <strong> Adi Arul@Metro Atlanta Chamber Grow Council </strong>{' '}
            </a>
          </p>
        </>
      )
    } else if (content === 1) {
      return (
        <>
          <h2> Kavitha Palani - President</h2>
          <p>
            Prior to Co-founding Emrit, Kavitha was a co-founder and Managing
            Director of Enrich LLC (Global leader in Oracle Procurement SaaS).
            She ran Enrich operations and grew it to a global company across
            North America, Europe, and Asia before her exit in early 2016.
            Kavitha is also a Managing Partner at 11-11 Ventures, a venture
            capital firm that has invested in 35 early-stage technology
            startups. Kavitha is actively involved in the community, currently
            serving as Founder and Director of AK Foundation, a non-profit
            organization supporting education for underprivileged children in
            India, Africa (Tanzania) and Georgia (USA). Kavitha’s key strengths
            are collaboration, delegation, decisiveness, and intuition. She also
            handles pressure with ease and is a great multi-tasker.
          </p>
        </>
      )
    } else if (content === 2) {
      return (
        <>
          <h2> Randall Pires - Co-founder, CTO/COO</h2>
          <p>
            Since graduating from Georgia Tech with an engineering degree in
            '07, his next 10 years were spent working internationally, mostly in
            Africa. His career started as a project engineer building the
            largest LNG plant in the world. Afterwards Randall started his own
            Wireless ISP company & had internet coverage for 100s of thousands
            of users across 4 times zones in Africa, from Angola to South Sudan.
            After the Civil War relapse in South Sudan he has been focused on
            blockchain technologies, empowering the individual with access to
            information (Internet 1.0), and access to Value Exchange (Internet
            2.0). Randall is an international speaker sharing visions of Society
            5.0.
          </p>
        </>
      )
    } else if (content === 3) {
      return (
        <>
          <h2> Arul Murugan - Advisor</h2>
          <p>
            An entrepreneur turned venture capitalist, Arul Murugan focuses on
            investing and building category-leading businesses that scale
            quickly and endure even the most challenging market conditions. His
            12 years as Founder, CEO, and Chairman of Enrich, an Oracle-based
            SaaS procurement solution, were critical in forming his philosophy
            to growth. He brought that philosophy from Enrich to his portfolio
            of 35 companies in 11-11 Ventures and now Borderless Capital, where
            he is investing in category-leading companies that have proven
            business models, scalable revenue and a clear path towards
            profitability. Arul’s key strengths are business model innovation,
            economics and Venture investments with strong financial acumen.
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
      <h2> Meet the Emrit Team </h2>
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
                  className={styles.Img}
                  src={require('../../assets/adi.jpg')}
                />
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(1)
                }}
              >
                <Img
                  className={styles.Img}
                  src={require('../../assets/Kavitha_Palani.jpg')}
                />
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(2)
                }}
              >
                <Img
                  className={styles.Img}
                  src={require('../../assets/randall.jpg')}
                />
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(3)
                }}
              >
                <Img
                  className={styles.Img}
                  src={require('../../assets/arul.jpg')}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={8} className={styles.col}>
            <div className={styles.leftContainer}>{renderContent()}</div>
          </Col>
          <Col xs={12} md={12} lg={2} className={styles.col}>
            {/* <div className={styles.rightContainer}>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(4)
                }}
              >
                <h3> Security</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(5)
                }}
              >
                <h3> How to Earn</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(6)
                }}
              >
                <h3> How to Earn more</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(7)
                }}
              >
                <h3> Learn more about Helium</h3>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Company
