import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Container, Button } from 'react-bootstrap'
import FormikControl from './formik-control'

function FormikContainer() {
  const initialValues = {
    nomorHp: ''
  }
  const validationSchema = Yup.object({
    nomorHp: Yup.string().required('Diperlukan')
  })
  const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values)
    onSubmitProps.setSubmitting(false)
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <FormikControl
              control="input"
              type="text"
              label="Nomor Handphone"
              name="nomorHp"
            />
            <Button
              variant="primary"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Kirimkan
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default FormikContainer
