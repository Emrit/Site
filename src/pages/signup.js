import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './signup.module.scss'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  InputGroup,
} from 'react-bootstrap'
import axios from 'axios'
import { useLocation } from 'gatsby'

const defaultAddress = {
  addressLine1: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  longitude: '',
  latitude: '',
  heightFloor: '',
}

function SignupPage() {
  const [validated, setValidated] = useState(false)
  const [first, setFirst] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [installs, setInstalls] = useState(0)
  const [finalShippingAdresses, setFinalShippingAdresses] = useState([0])
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [shippingAddress, setShippingAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [finalForms, setFinalForms] = useState([
    {
      addressLine1: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      longitude: '',
      latitude: '',
      heightFloor: '',
    },
  ])

  const formValues = useRef(null)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const final = finalForms.map((data, index) => {
    let recentIndex = installs <= 0 ? 1 : index + 1
    return (
      <div className={styles.formList}>
        <h6> Install Address {index + 1}</h6>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control required type="text" placeholder="Address Line 1" />
            <Form.Control.Feedback type="invalid">
              Please your address line
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="City" />
            <Form.Control.Feedback type="invalid">
              Please provide your City
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>State</Form.Label>
            <Form.Control required type="text" placeholder="State" />
            <Form.Control.Feedback type="invalid">
              Please provide your state.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="zipCode" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zipCode.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Longitude</Form.Label>
            <Form.Control type="text" placeholder="Longitude" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid longitude.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Latitude</Form.Label>
            <Form.Control type="text" placeholder="Latitude" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid latitude.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Height/Floor</Form.Label>
            <Form.Control type="text" placeholder="Height/Floor" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Height/Floor.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </div>
    )
  })

  return (
    <div className={styles.container}>
      <Form
        ref={formValues}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className={styles.formSection}>
          <h3> Your Detail</h3>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={e => setFirst(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please your first name
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={e => setlastName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please your last name
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                required
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label> Number of installations: </Form.Label>
              <Form.Control
                type="number"
                placeholder="Number Of Installation"
                required
                min={1}
                onChange={e => {
                  const no = parseInt(e.target.value)
                  const finalFormsLast = []

                  let i
                  for (i = 0; i < no; i++) {
                    finalFormsLast.push(defaultAddress)
                  }

                  if (no <= 0) {
                    finalFormsLast.push(defaultAddress)
                  }

                  setFinalForms(finalFormsLast)
                  setInstalls(e.target.value)
                }}
                defaultValue={1}
              />
              <Form.Control.Feedback type="invalid">
                Please provide the number of installations.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </div>
        <div className={styles.formSection}>
          <h3> Shipping Detail</h3>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Shipping Address"
                onChange={e => setShippingAddress(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a shipping address
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Shipping Address
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address Line 1"
                onChange={e => setAddressLine1(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an address line
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address Line 2"
                onChange={e => setAddressLine2(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City"
                onChange={e => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Zip Code"
                onChange={e => setZipCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="State"
                onChange={e => setState(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Country</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Country"
                onChange={e => setCountry(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </div>

        <div className={styles.formSection}>
          <h3> Final Installation Address</h3>
          {final}
        </div>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  )
}

export default SignupPage
