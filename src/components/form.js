import React from 'react'
import { useFormik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'

const IndexPage = () => {
  const formik = useFormik({
    initialValues: {
      nomorHp: ''
    },
    onSubmit: (values) => {
      console.log('Form data', values)
    }
  })

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Nomor HP (Opsional)</Form.Label>
          <Form.Control
            type="text"
            id="nomorHp"
            name="nomorHp"
            onChange={formik.handleChange}
            value={formik.values.nomorHp}
            placeholder="08135519***"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Kirimkan
        </Button>
      </Form>
    </Container>
  )
}

export default IndexPage
