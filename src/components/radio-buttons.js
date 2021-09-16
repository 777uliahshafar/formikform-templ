import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './text-error'
import { Form } from 'react-bootstrap'

function RadioButtons(props) {
  const { label, name, options, ...rest } = props
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <Form.Label>{option.key}</Form.Label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  )
}

export default RadioButtons
