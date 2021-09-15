import React from 'react'
import Input from './input'
import TextArea from './textarea'
import Select from './select'

function FormikControl(props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <TextArea {...rest} />
    case 'select':
      return <Select {...rest} />
    default:
      return null
  }
}
export default FormikControl
