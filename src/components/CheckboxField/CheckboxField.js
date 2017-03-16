import React, { PropTypes } from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

const CheckboxField = ({ label, input, meta: { touched, error, warning } }) => (
  <Form.Field>
    <Checkbox
      label={label}
      checked={input.checked}
      onChange={() => input.onChange(!input.checked)}
    />
    {touched && (
      (error && <span>{error}</span>) ||
      (warning && <span>{warning}</span>)
    )}
  </Form.Field>
)

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default CheckboxField
