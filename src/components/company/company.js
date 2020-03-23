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
          <h2> Adi Arul - Co-founder and CEO</h2>
          <p>
            Aditya (Adi) Arul, a 6th grader at Atlanta International School is
            set to become an entrepreneur and that too, of the disruptive kind.
            Emrit, will provide a peer-to-peer wireless network to track and
            link small devices like dog collars and e-scooters at a
            significantly lower cost than what wireless telcos offer currently.
            Adi has been mining cryptocurrencies in his basement at the age of
            10. Aditya’s strong interest in the project and his interest in
            investing in blockchain startups evolved into the decision to start
            his own company. Just before his 2019 summer break began, Adi Arul
            learned about the Helium Hotspot, a platform anyone can use to earn
            a new cryptocurrency. The platform runs on a LongFi protocol, which
            can send data 200 times farther than normal WiFi. Emrit is
            completely bootstrapped. Adi said he used $5,000 of his own savings
            (collected by doing chores) and invested it into an early-stage
            blockchain company in 2018. Adi made a $100,000 return on the
            investment, which he used to fund Emrit. Adi said“I took a portion
            of that return to buy hotspots and to bring in a team. I did use
            $450 of my savings to buy video games. I love to play video games
            and VR.” Adi , who loves golf and received his black belt in karate
            at age 9, hopes to expand his company throughout the USA shortly.
          </p>
        </>
      )
    } else if (content === 1) {
      return (
        <>
          <h2> Kavitha Palani - President</h2>
          <p>
            Kavitha is a co-founder and partner in Emrit and 11-11 Ventures.
            Kavitha takes care of legal, tax compliance, treasury, risk
            management, and overall administration within Emrit and 11-11
            Ventures. Prior to this, she was a co-founder and Managing Director
            of Enrich LLC (Global leader in Oracle Procurement SaaS). She ran
            Enrich operations and grew it to a global company across North
            America, Europe and Asia before her exit in early 2016. Enrich is
            now a Data Intensity Company owned by a private equity firm.
          </p>
          <p>
            Kavitha is actively involved in the community, currently serving as
            Founder and Director of AK Foundation, a non-profit organization
            supporting high quality education and mentoring for underprivileged
            children in India, Africa (Tanzania) and Georgia (USA.)
          </p>
          <p>
            Kavitha’s key strengths are collaboration, delegation, decisiveness,
            and intuition. She also handles pressure with ease and is a great
            multi-tasker.
          </p>
          <p>
            Kavitha lives in Atlanta, GA, with her loving husband and two
            wonderful kids. She loves dancing to Bollywood Music, working out,
            shopping, and traveling.
          </p>
        </>
      )
    } else if (content === 2) {
      return (
        <>
          <h2> Randall Pires - Co-founder/CTO & COO</h2>
          <p>
            Since graduating from Georgia Tech with an engineering degree in
            '07, next 10 years spent working int’l, mostly in Africa. Career
            started as a project engineer building the largest LNG plant in the
            world. Afterwards started own WISP company & had internet coverage
            for 100s of thousands of users across 4 times zones in Africa, from
            Angola to South Sudan.
          </p>
          <p>
            RESULTS: facilitating innovation discussions among Global 1000
            executives about the emerging techs of blockchain, AI(AGI/ASI)/DL,
            Smart Cities, 5G, Big Data, IoT, Autonomous Vehicles as pub
            transportation, and Affordable internet access for all --> leading
            to implementation.
          </p>
        </>
      )
    } else if (content === 3) {
      return (
        <>
          <h2> Kyle Mckinley - Operations Manager</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt erat et dolor pretium, vitae eleifend tortor fringilla.
            Nullam pellentesque mauris nibh, non suscipit libero tempor eu. Cras
            vitae nisl consectetur, posuere mauris eget, ornare nisl. In
            ultricies, ligula nec lobortis tincidunt, turpis dolor bibendum
            sapien, quis viverra sem arcu vitae dolor. Maecenas vel enim tellus.
            Proin quis tortor non velit efficitur hendrerit. Quisque nisi nisi,
            eleifend vitae turpis sit amet, fringilla egestas metus. Donec
            ultrices eros at lorem auctor, ac ultricies orci interdum. Sed metus
            urna, convallis in felis id, maximus vestibulum lorem. Nam bibendum
            tortor quis nunc iaculis, vel aliquet justo malesuada. Sed vel sem
            quis est dignissim ornare id sit amet nibh. Praesent dolor arcu,
            porta at nulla eget, interdum consectetur leo. Mauris viverra
            placerat velit, ac dictum ante.
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
      <h2> About Us </h2>
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
                  src={require('../../assets/CEO.jpg')}
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
                  src={require('../../assets/Randall_Pires.jpg')}
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
                  src={require('../../assets/Empty.png')}
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
                <h3> Earnings</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(6)
                }}
              >
                <h3> Earning More</h3>
              </div>
              <div
                className={styles.box}
                onClick={() => {
                  setContent(7)
                }}
              >
                <h3> More helium info</h3>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Company
