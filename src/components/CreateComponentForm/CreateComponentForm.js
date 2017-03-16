import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import CheckboxField from '../CheckboxField/CheckboxField'

const SubmitValidationForm = ({ onSubmit, file, error, handleSubmit, pristine, reset, submitting }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <label htmlFor='name'>Component name</label>
      <Field name='name' component='input' placeholder='Component name' />
    </Form.Field>
    <Field name='create-css' component={CheckboxField} label='Create .css files' />
    <Field name='create-js' component={CheckboxField} label='Create .js files' />
    {error && <strong>{error}</strong>}
    <div>
      <Button type='submit' disabled={submitting}>Create component</Button>
      <Button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
    </div>
  </Form>
)

export default reduxForm({
  form: 'create-component-form'
})(SubmitValidationForm)
