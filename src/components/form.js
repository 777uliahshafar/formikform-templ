import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { Form, Button, Container } from 'react-bootstrap'
import './form.css'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextError from './textError'

const initialValues = { nomorHp: '' }

const onSubmit = (values, onSubmitProps) => {
  console.log('Form data', values)
  console.log('Submit props', onSubmitProps)
  onSubmitProps.setSubmitting(false)
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
        // validateOnChange={false}
        // validateOnBlur={false}
      >
        {(formik) => {
          console.log('Formik props', formik)
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
                <ErrorMessage name="nomorHp" component={TextError} />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
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
