import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { Form, Button, Container } from 'react-bootstrap'
import './form.css'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialValues = { nomorHp: '' }

const onSubmit = (values) => {
  console.log('Form data', values)
}

const validationSchema = Yup.object().shape({
  nomorHp: Yup.string().required('Diperlukan')
})

const IndexPage = () => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label>Nomor HP (Opsional)</Form.Label>
                <Field
                  type="text"
                  id="nomorHp"
                  name="nomorHp"
                  placeholder="08135519***"
                />
                <ErrorMessage name="nomorHp" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Kirimkan
              </Button>
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}

export default IndexPage
