import React, { useState } from 'react'
import { useFormik, Formik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'

const IndexPage = () => {
  const formik = useFormik({
    initialValues: {
      nomorHp: ''
    }
  })

  return (
    <Formik
      initialValues={{
        nomorHp: ''
      }}
    >
      {(formik) => (
        <Container>
          {console.log('Form values', formik.values)}
          <Form>
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
          </Form>
        </Container>
      )}
    </Formik>
  )
}

export default IndexPage
