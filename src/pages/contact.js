import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './contact.module.scss'
import { useForm } from 'react-hook-form'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function ContactPage(props) {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <Container className={styles.fluidContainer} fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={12} className={styles.col}>
            <div className={styles.leftContainer}></div>
            <div className={styles.rightContainer}>
              <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
