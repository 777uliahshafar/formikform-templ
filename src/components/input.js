import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './text-error'
import { Form } from 'react-bootstrap'

function Input(props) {
  const { label, name, ...rest } = props
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  )
}

export default Input
