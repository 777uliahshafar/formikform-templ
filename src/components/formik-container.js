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

const radioOptions = [
  { key: 'Option 1', value: 'rOption1' },
  { key: 'Option 2', value: 'rOption2' },
  { key: 'Option 3', value: 'rOption3' },
  { key: 'Option 4', value: 'rOption4' },
  { key: 'Option 5', value: 'rOption5' }
]

const checkboxOptions = [
  { key: 'Option 1', value: 'cOption1' },
  { key: 'Option 2', value: 'cOption2' },
  { key: 'Option 3', value: 'cOption3' },
  { key: 'Option 4', value: 'cOption4' },
  { key: 'Option 5', value: 'cOption5' }
]

function FormikContainer() {
  const initialValues = {
    nomorHp: '',
    description: '',
    preferensi: '',
    likert: '',
    checkboxOption: ''
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
          <Form
            name="formik form v1"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={formik.handleSubmit}
          >
            <p hidden>
              <label>
                I love honeypot : <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="formik form v1" />

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
            <FormikControl
              control="radio"
              label="Pilih Skala"
              name="likert"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Pilih checkbox"
              name="checkboxOption"
              options={checkboxOptions}
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
