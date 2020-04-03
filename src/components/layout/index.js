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
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }
  }
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    let search = this.state.search
    search = search.replace(/\s+/g, '-').toLowerCase()

    let link = `http://dashboard.helium.com/d/vHLwU-cZz/hotspot-earnings?orgId=1&refresh=1m&var-hotspot=${search}`
    window.open(link, '_blank')
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <a
            class="header-top-bar"
            target="_blank"
            href="http://dashboard.helium.com/d/B_z1R9OZz/blockchain?orgId=1&refresh=1m"
          >
            <p>Check your hotspot’s earning NOW! Click here to view.</p>
          </a>
          <form onSubmit={e => this.handleSubmit(e)}>
            <button
              onClick={e => this.handleSubmit(e)}
              type="submit"
              style={{
                background: 'transparent',
                border: 'none',
                marginRight: 5,
              }}
            >
              <i class="fa fa-search" style={{ color: '#fff' }}></i>
            </button>
            <input
              value={this.state.search}
              type="text"
              placeholder="Search Hotspot"
              onChange={e => this.setState({ search: e.target.value })}
            />
          </form>
        </div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
