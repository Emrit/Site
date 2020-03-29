import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './navi.module.scss'
import Img from 'react-image'
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
import { HamburgerCollapse } from 'react-animated-burgers'
import ReactDrawer from 'react-drawer'
import 'react-drawer/lib/react-drawer.css'
import './navi.css'

class Navi extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  toggleButton() {
    const { isActive } = this.state
    this.setState({ isActive: !isActive })
  }

  render() {
    const { location, title } = this.props
    return (
      <Navbar expand="lg" sticky="top" className={[styles.container]}>
        <div className={styles.subHeader}>
          <div>
            <Link to="/" className={styles.logoText}>
              <Img
                src={require('../../assets/logo-nav.svg')}
                className={styles.image}
                decode={false}
              />
            </Link>
          </div>

          <div className={styles.menuButton}>
            <HamburgerCollapse
              isActive={this.state.isActive}
              toggleButton={this.toggleButton.bind(this)}
              barColor="white"
              buttonWidth={30}
            />
          </div>

          <div className={styles.right}>
            <Link to="/#about" className={styles.link}>
              About
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
            <Link to="/signup" className={styles.link}>
              <Button className={styles.button}>Become a host</Button>
            </Link>
          </div>
        </div>
        <ReactDrawer
          open={this.state.isActive}
          position={'top'}
          onClose={() => {
            this.setState({
              isActive: false,
            })
          }}
          noOverlay={false}
        >
          <div className={styles.menuDropDown}>
            <Link
              to="/#about"
              onClick={() => {
                this.setState({
                  isActive: false,
                })
              }}
              className={styles.link}
            >
              About
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
            <Link to="/signup" className={styles.link}>
              <Button className={styles.button}>Become a host</Button>
            </Link>

            <div onClick={() => this.setState({ isActive: false })}>
              <HamburgerCollapse
                isActive={this.state.isActive}
                barColor="white"
                buttonWidth={30}
              />
            </div>
          </div>
        </ReactDrawer>
      </Navbar>
    )
  }
}

export default Navi
