import React from 'react'
import Input from './input'
import TextArea from './textarea'
import Select from './select'
import RadioButtons from './radio-buttons'
import CheckboxGroup from './checkbox-group'

function FormikControl(props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <TextArea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />

    default:
      return null
  }
}
export default FormikControl
