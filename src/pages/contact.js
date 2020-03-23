import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './contact.module.scss'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function ContactPage(props) {
  return (
    <div className={styles.container}>
      <Container className={styles.fluidContainer} fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={12} className={styles.col}>
            <div className={styles.leftContainer}>
              {/* Here */}
              {/* <h2> Emrit’s Helium Host Program</h2>
              <p> Come join us now and claim your FREE hotspot!</p>
              <Button className={styles.button}> More Info </Button> */}
            </div>
            <div className={styles.rightContainer}>
              <Form className={styles.form}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
                  <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    //   type="email"
                    placeholder="Enter Subject"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicComment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control type="email" placeholder="Comment" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactPage
