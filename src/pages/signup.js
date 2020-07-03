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
import Img from 'react-image'
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

function SignupPage(props) {
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [first, setFirst] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [referralNumber, setReferralNumber] = useState('')
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

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleClose = () => {
    // props.navigate('/')
    setShow(false)
  }

  const handleClose2 = () => {
    props.navigate('/')
    setShow(false)
  }

  const handleShow2 = () => setShow2(true)
  const handleShow = () => setShow(true)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      event.preventDefault()
      event.stopPropagation()
      submit()
    }
  }

  const submit = async () => {
    const addressNew = []
    const cityNew = []
    const zipcodeNew = []
    const stateNew = []
    const countryNew = []
    const longitudeNew = []
    const latitudeNew = []
    const heightNew = []
    setLoading(true)

    finalForms.map((data, index) => {
      addressNew.push(data.addressLine1)
      cityNew.push(data.city)
      zipcodeNew.push(data.zipCode)
      stateNew.push(data.state)
      countryNew.push(data.country)
      longitudeNew.push(data.longitude)
      latitudeNew.push(data.latitude)
      heightNew.push(data.heightFloor)
    })

    const signup = [
      first,
      lastName,
      email,
      phoneNumber,
      referralNumber,
      installs,
      shippingAddress,
      addressLine1,
      addressLine2,
      city,
      zipCode,
      state,
      country,
      addressNew,
      cityNew,
      zipcodeNew,
      stateNew,
      countryNew,
      longitudeNew,
      latitudeNew,
      heightNew,
    ]

    try {
      const data = await axios.post('/api/v1/dev/signupEmrit', {
        signup,
      })

      console.group(data.data, 'data')
      setLoading(false)
      handleShow2()
    } catch (error) {
      console.log(error, 'error')
      setLoading(false)
    }
  }

  const final = finalForms.map((data, index) => {
    let recentIndex = installs <= 0 ? 1 : index + 1
    return (
      <div className={styles.formList}>
        <h6> Install Address {index + 1}</h6>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address Line 1"
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].addressLine1 = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your address line
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="City"
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].city = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your City
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>County/state/region</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="County/state/region"
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].state = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your state.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Zip Code / Postcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip Code / Postcode"
              required
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].zipCode = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zipCode.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              required
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].country = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Longitude(optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Longitude"
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].longitude = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Latitude (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Latitude"
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].latitude = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Height/Floor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Height/Floor"
              onChange={e => {
                const newFinalForms = [...finalForms]
                newFinalForms[index].heightFloor = e.target.value
                setFinalForms(newFinalForms)
              }}
            />
          </Form.Group>
        </Form.Row>
      </div>
    )
  })

  return (
    <>
      <div className={styles.header}>
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
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,15}|[0-9]{1,3})(\]?)$"
                  type="email"
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
              <Form.Group as={Col} md="4" controlId="referral">
                <Form.Label>Referred by</Form.Label>
                <Form.Control
                  name="referral"
                  type="text"
                  placeholder="Referral"
                  onChange={e => setReferralNumber(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid referral number
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
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
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
                <Form.Label>Zip Code / Postcode</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip Code / Postcode"
                  onChange={e => setZipCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>County/state/region</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="County/state/region"
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
            <p
              style={{
                margin: 0,
                padding: 0,
                fontSize: '.8rem',
                color: 'blue',
                cursor: 'pointer',
              }}
              onClick={() => handleShow()}
            >
              Terms And Conditions
            </p>
          </Form.Group>

          <Button disabled={loading} type="submit">
            {loading ? 'Submitting' : 'Submit form'}
          </Button>
        </Form>

        <Modal
          style={{ width: '90%', margin: 'auto' }}
          show={show2}
          centered
          onHide={handleClose2}
        >
          <Modal.Header>
            <Modal.Title>Thank you and welcome to Team Emrit!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your order has been received. You will receive an email from us 2-3
            weeks before your order is ready for shipment.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>

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
              Host will receive a bonus +100 HNTs if activated within 2 weeks
              (14 days) of courier confirmation of delivery per installation
              address. This bonus will be paid within 30 days of activation. OR
              +25 HNT if activated between 2-4 weeks OR +10 HNT if activated
              between 4-6 weeks. Host will receive a bonus +25 HNTs per referral
              activation for the referrer, and +25 HNT for referred. These
              bonuses will be sent within 30 days of activation. 15% revenue
              share will be paid on the 15 th day of the following month for the
              previous month. If Host does not activate hotspot within 6 weeks
              from the courier delivery confirmation, Emrit will ask host to
              return the hotspot, and provide a shipping label. If Host needs to
              move the installation address of the hotspot, Emrit will provide a
              return shipping label for the original Hotspot, and ship a new
              Hotspot with updated location. We ask hosts not to modify the
              hotspot for any reason. Any violations are at the sole
              responsibility of the host. Emrit reserves the right to recall the
              Host’s hotspot at any time, for any reason.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default SignupPage
