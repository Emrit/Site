import React, { useState } from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './header.module.scss'
import Img from 'react-image'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Header(props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2> Emrit’s Helium Host Program</h2>
        <h3>Emrit: Your community's #1 end-to-end Helium solutions partner.</h3>
        <p> Come join us now and claim your FREE hotspot!</p>
        <Link to="/#about">
          <Button className={styles.button}> More Info </Button>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <Img
          src={require('../../assets/header/Emrits_White.svg')}
          className={styles.image}
          decode={false}
        />
      </div>
    </div>
  )
}

// function Header(props) {
//   return (
//     <div className={styles.container}>
//       <Container className={styles.fluidContainer} fluid>
//         <Row className={styles.row}>
//           <Col xs={12} md={12} lg={6} className={styles.col}>
//             <div className={styles.leftContainer}>
//               <h2> Emrit’s Helium Host Program</h2>
//               <p> Come join us now and claim your FREE hotspot!</p>
//               <Button className={styles.button}> More Info </Button>
//             </div>
//           </Col>
//           <Col xs={12} md={12} lg={6} className={styles.col}>
//             <div className={styles.rightContainer}>
//               <Img
//                 src={require('../../assets/header/Emrits_White.svg')}
//                 className={styles.image}
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

export default Header
