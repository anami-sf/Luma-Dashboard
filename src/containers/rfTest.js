import React from 'react'
import { connect } from 'react-redux'  //Need to add this
import { Field, reduxForm, formValueSelector } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit, hasFirstName } = props
  return(    
  <form onSubmit={handleSubmit}>
    {hasFirstName && (
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" placeholder="First Name"/>
    </div>
    )}
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <button type="submit">Submit</button>
    <h1>TEST</h1>
  </form>) 
}

ContactForm = reduxForm({
  form: 'contactForm' // a unique identifier for this form
})(ContactForm)

const selector = formValueSelector('contactForm')
ContactForm = connect(state => {
  const {hasFirstName} = selector(state, 'firstName')
  return {
    hasFirstName
  }
})(ContactForm)




export default ContactForm