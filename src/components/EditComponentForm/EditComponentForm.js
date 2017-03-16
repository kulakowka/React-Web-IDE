import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import CheckboxField from '../CheckboxField/CheckboxField'
import { Field, reduxForm } from 'redux-form'

const EditComponentForm = ({ onSubmit, component, error, handleSubmit, pristine, reset, submitting }) => (
  <Form onSubmit={handleSubmit(onSubmit.bind(null, component.path))}>
    <Form.Field>
      <label htmlFor='name'>Component name</label>
      <Field type='text' name='name' component='input' placeholder='Component name' />
    </Form.Field>
    <Field name='rename-css' component={CheckboxField} label='Rename .css files' />
    <Field name='rename-js' component={CheckboxField} label='Rename .js files' />
    {error && <strong>{error}</strong>}
    <div>
      <Button type='submit' disabled={submitting}>Update component</Button>
      <Button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
    </div>
  </Form>
)

EditComponentForm.defaultProps = {
  initialValues: {
    name: 'test',
    'rename-css': true
  }
}

export default reduxForm({
  form: 'edit-component-form'
})(EditComponentForm)
