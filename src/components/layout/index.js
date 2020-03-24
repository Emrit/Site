import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/navi'
import Footer from 'components/footer'
import { siteMetadata } from '../../../gatsby-config'
import styles from './index.module.scss'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#about"]')
}

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <a
            class="header-top-bar"
            target="_blank"
            href="http://dashboard.helium.com/d/vHLwU-cZz/hotspot-earnings?orgId=1&refresh=1m"
          >
            <p>Check your hotspot’s earning NOW! Click here to view.</p>
          </a>
        </div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
