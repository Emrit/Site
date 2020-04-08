import { Link } from 'gatsby'
import React, { useState } from 'react'
import Img from 'react-image'
import styles from './footer.module.scss'
import './style.scss'
import { Button, Modal } from 'react-bootstrap'

const Footer = ({ author, title }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <a href="https://www.instagram.com/emrit.io/">
          <Img
            src={require('../../assets/footer/instagram.png')}
            className={styles.footerIcon}
            decode={false}
          />
        </a>
        <a href="https://discord.gg/5TvrDzh">
          <Img
            src={require('../../assets/footer/discord.png')}
            className={styles.footerIcon}
            decode={false}
          />
        </a>
        <a href="https://twitter.com/emrit2040">
          <Img
            src={require('../../assets/footer/twitter.svg')}
            className={styles.footerIcon}
            decode={false}
          />
        </a>
        <a href="https://www.linkedin.com/company/emrit/">
          <Img
            src={require('../../assets/footer/linkedin.png')}
            className={styles.footerIcon}
            decode={false}
          />
        </a>
      </div>
      <p>Copyright © 2020 Emrit, Inc.</p>
      <p style={{ fontSize: '19px' }}>
        Emrit: Your community's #1 end-to-end Helium solutions partner.
      </p>
      <p>Spread the word, spread the network! #teamemrit</p>
      <p>
        <a href="/signup">Refer a friend to earn additional helium tokens.</a>
      </p>
      <p style={{ cursor: 'pointer' }} onClick={handleShow}>
        Terms & Conditions{' '}
      </p>
      <Modal
        style={{ width: '90%', margin: 'auto' }}
        show={show}
        centered
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Terms And Condition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={styles.modalBody}>
            Host will receive a bonus +100 HNTs if activated within 2 weeks (14
            days) of courier confirmation of delivery per installation address.
            This bonus will be paid within 30 days of activation. OR +25 HNT if
            activated between 2-4 weeks OR +10 HNT if activated between 4-6
            weeks. Host will receive a bonus +25 HNTs per referral activation
            for the referrer, and +25 HNT for referred. These bonuses will be
            sent within 30 days of activation. 15% revenue share will be paid on
            the 15 th day of the following month for the previous month. If Host
            does not activate hotspot within 6 weeks from the courier delivery
            confirmation, Emrit will ask host to return the hotspot, and provide
            a shipping label. If Host needs to move the installation address of
            the hotspot, Emrit will provide a return shipping label for the
            original Hotspot, and ship a new Hotspot with updated location. We
            ask hosts not to modify the hotspot for any reason. Any violations
            are at the sole responsibility of the host. Emrit reserves the right
            to recall the Host’s hotspot at any time, for any reason.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Footer
