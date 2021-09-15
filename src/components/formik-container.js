import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Container, Button } from 'react-bootstrap'
import FormikControl from './formik-control'

const dropdownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]

function FormikContainer() {
  const initialValues = {
    nomorHp: '',
    description: '',
    preferensi: ''
  }
  const validationSchema = Yup.object({
    nomorHp: Yup.string().required('Diperlukan'),
    description: Yup.string().required('Diperlukan')
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
            <FormikControl
              control="textarea"
              label="Deskripsi"
              name="description"
            />
            <FormikControl
              control="select"
              label="Pilih Preferensi"
              name="preferensi"
              options={dropdownOptions}
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
