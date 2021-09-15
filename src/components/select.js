import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './text-error'
import { Form } from 'react-bootstrap'

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  )
}

export default Select
