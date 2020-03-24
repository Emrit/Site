import React from 'react'
import styles from './table.module.scss'

function Table(props) {
  return (
    <div className={styles.container}>
      <div className={styles.transparentTop}>
        <div className={styles.text}>
          <p> </p>
        </div>
        <div className={styles.helium}>
          <p> Helium </p>
        </div>
        <div className={styles.icons}>
          <p> ATT </p>
        </div>
        <div className={styles.icons}>
          <p> Verizon </p>
        </div>
        <div className={styles.icons}>
          <p> T-Mobile </p>
        </div>
      </div>
      <div className={styles.fill}>
        <div className={styles.text}>
          <p> Ability to pay based on device usage </p>
        </div>
        <div className={styles.helium}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.transparent}>
        <div className={styles.text}>
          <p> Connectivity without sim cards or related fees </p>
        </div>
        <div className={styles.helium}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.fill}>
        <div className={styles.text}>
          <p> Ability to pool data across devices</p>
        </div>
        <div className={styles.helium}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.transparent}>
        <div className={styles.text}>
          <p> Unlimited data usage (no caps) </p>
        </div>
        <div className={styles.helium}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.fill}>
        <div className={styles.text}>
          <p> Charges for data overage </p>
        </div>
        <div className={styles.helium}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.transparentBottom}>
        <div className={styles.text}>
          <p> </p>
        </div>
        <div className={styles.heliumBottom}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
        <div className={styles.icons}></div>
      </div>
    </div>
  )
}

export default Table
