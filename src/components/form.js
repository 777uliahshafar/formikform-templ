import React from 'react'
import { Formik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'

const IndexPage = () => {
  return (
    <Formik
      initialValues={{
        nomorHp: ''
      }}
    >
      <Container>
        <Form>
          <Form.Group controlId="formPhone">
            <Form.Label>Nomor HP (Opsional)</Form.Label>
            <Form.Control
              type="text"
              name="nomorHp"
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
