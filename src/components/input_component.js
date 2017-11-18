import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'

export default props => {
  const {
    id,
    value,
    error,
    onChange,
    label,
    onBlur
  } = props
  return (
    <FormControl error={error}>
      <InputLabel htmlFor={id}>{ label }</InputLabel>
      <Input id={id} value={value} onChange={onChange} onBlur={onBlur} />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}
