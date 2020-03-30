import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './contact.module.scss'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios'
import { useLocation } from 'gatsby'
import { useForm, useField, splitFormProps } from 'react-form'
import Img from 'react-image'

async function sendToServer(values) {
  const contact = [values.name, values.email, values.subject, values.comment]
  try {
    const data = await axios.post(
      process.env.serverURL + '/api/v1/dev/contactEmrit',
      {
        contact,
      }
    )

    console.group(data.data, 'data')
  } catch (error) {
    console.log(error, 'error')
  }
  //   await new Promise(resolve => setTimeout(resolve, 1000))
  return values
}

async function fakeCheckValidName(name, instance) {
  if (!name) {
    return 'A name is required'
  }

  return instance.debounce(async () => {
    console.log('checking name')
    await new Promise(resolve => setTimeout(resolve, 1000))
    // All names are valid, so return a false error
    return false
  }, 500)
}

async function checkValidComment(comment, instance) {
  if (!comment) {
    return 'A comment is required'
  }

  return instance.debounce(async () => {
    console.log('checking comment')
    await new Promise(resolve => setTimeout(resolve, 1000))
    // All names are valid, so return a false error
    return false
  }, 500)
}

async function checkValidSubject(subject, instance) {
  if (!subject) {
    return 'A subject is required'
  }

  return instance.debounce(async () => {
    console.log('checking subject')
    await new Promise(resolve => setTimeout(resolve, 1000))
    // All names are valid, so return a false error
    return false
  }, 500)
}

async function checkValidEmail(email, instance) {
  if (!email) {
    return 'An email is required'
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(String(email).toLowerCase())) {
    return 'Enter a valid email'
  }

  return instance.debounce(async () => {
    console.log('checking email')
    await new Promise(resolve => setTimeout(resolve, 1000))
    // All names are valid, so return a false error
    return false
  }, 500)
}

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField(field, fieldOptions)

  // Build the field
  return (
    <>
      <Form.Control
        // type="email"
        // placeholder="Enter email"
        className={styles.input}
        {...getInputProps({ ref, ...rest })}
      />
      {/* <input className={styles.input} {...getInputProps({ ref, ...rest })} /> */}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em className={styles.error}>{error}</em>
      ) : null}
    </>
  )
})

function Contact(props) {
  // Use the useForm hook to create a form instance
  // console.log(props)
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      // onSubmit (and everything else in React Form)
      // has async support out-of-the-box
      await sendToServer(values)
      props.handleShow()
      console.log('Huzzah!')
    },
    // debugForm: true,
  })

  return (
    <Form className={styles.formContainer}>
      <div className={styles.labelContainer}>
        <label className={styles.label}>
          Name: <InputField field="name" validate={fakeCheckValidName} />
        </label>
      </div>

      <div className={styles.labelContainer}>
        <label className={styles.label}>
          Email:
          <InputField
            field="email"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            validate={checkValidEmail}
          />
        </label>
      </div>

      <div className={styles.labelContainer}>
        <label className={styles.label}>
          Subject: <InputField field="subject" validate={checkValidSubject} />
        </label>
      </div>

      <div className={styles.labelContainer}>
        <label className={styles.label}>
          Comment: <InputField field="comment" validate={checkValidComment} />
        </label>
      </div>
      <div>
        <Button className={styles.button} type="submit" disabled={!canSubmit}>
          Submit
        </Button>
      </div>

      <div>
        <em>{isSubmitting ? 'Submitting...' : null}</em>
      </div>
    </Form>
  )
}

function ContactPage(props) {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    props.navigate('/')
    setShow(false)
  }
  const handleShow = () => setShow(true)

  console.log(props)
  return (
    <div className={styles.container}>
      <Modal
        style={{ width: '90%', margin: 'auto' }}
        show={show}
        centered
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Emrit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for your feedback, we would get back to you as soon as possible
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className={styles.fluidContainer} fluid>
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={12} className={styles.col}>
            <div className={styles.leftContainer}>
              <Img
                onClick={() => {
                  props.navigate('/')
                }}
                src={require('../assets/signup/back.svg')}
                className={styles.backButton}
                decode={false}
              />

              <Img
                src={require('../assets/logo-nav.svg')}
                className={styles.image}
                decode={false}
              />
            </div>
            <div className={styles.rightContainer}>
              <Contact
                handleShow={() => {
                  handleShow()
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactPage
