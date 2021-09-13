import React, { useState } from 'react'
import { Formik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'

const IndexPage = () => {
  const [formState, setFormState] = useState({
    nomorHp: ''
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => navigate('/terima-kasih/'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  return (
    <Formik>
      <Container>
        <Form
          onSubmit={handleSubmit}
          name="formik v1"
          method="post"
          data-netlify="true"
          action="/terima-kasih"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label>
              I love honeypot : <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="formik v1" />

          <Form.Group controlId="formPhone">
            <Form.Label>Nomor HP (Opsional)</Form.Label>
            <Form.Control
              type="text"
              name="nomorHp"
              onChange={handleChange}
              value={formState.nomorHp}
              placeholder="08135519***"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Kirimkan
          </Button>
        </Form>
      </Container>
    </Formik>
  )
}

export default IndexPage
