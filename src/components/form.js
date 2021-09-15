import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'
import './form.css'

const initialValues = {
  nomorHp: ''
}

const onSubmit = (values) => {
  console.log('Form data', values)
}

const validate = (values) => {
  // values.nomorHp
  // errors.nomorHp
  // errors.nomorHp =  "isian ini dibutuhkan"

  let errors = {}
  if (!values.nomorHp) {
    errors.nomorHp = 'Required'
  }
  return errors
}

const validationSchema = Yup.object().shape({
  nomorHp: Yup.string().required('Diperlukan')
})

const IndexPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    //    validate
  })

  return (
    <Container>
      {console.log('Visited field', formik.errors)}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Nomor HP (Opsional)</Form.Label>
          <Form.Control
            type="text"
            id="nomorHp"
            name="nomorHp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nomorHp}
            placeholder="08135519***"
            className={
              formik.touched.nomorHp && formik.errors.nomorHp ? 'error' : null
            }
          />

          {formik.touched.nomorHp && formik.errors.nomorHp ? (
            <div className="error-message">{formik.errors.nomorHp}</div>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Kirimkan
        </Button>
      </Form>
    </Container>
  )
}

export default IndexPage
