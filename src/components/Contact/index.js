import React, { useState } from 'react';
import { validateEmail, validateDate } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', birthDate: '', emailConsent: false });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, birthDate, emailConsent } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    // checks to make sure there are no empty fields
    if (
      !formState.name === '' ||
      !formState.email === '' ||
      !formState.birthDate === '' ||
      !formState.emailConsent === false
    ) {

      // if no empty fields, checks if all inputs are valid
      if (!errorMessage) {
        console.log('Submit Form', formState);
        setErrorMessage('Success!');
      } else {
        setErrorMessage('Unable to send message. Check fields');
      }

    } else {

      setErrorMessage('Unable to send submit. Empty Field.');

    }

  };

  const handleChange = (e) => {
    const field = e.target.name;
    // email validation
    if (field === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
        setFormState({ ...formState, [field]: e.target.value });
      }

    }
    // emailConsent validation
    if (field === 'emailConsent') {
      const isValid = e.target.checked === true;
      if (!isValid) {
        setErrorMessage('Email consent must be checked.')
      } else {
        setErrorMessage('');
        setFormState({ ...formState, [field]: e.target.checked });
      }
    }
    // name validation
    if (field === 'name') {
      const isValid = e.target.value.length > 1;
      if (!isValid) {
        setErrorMessage('Name cannot be blank')
      } else {
        setErrorMessage('');
        setFormState({ ...formState, [field]: e.target.value });
      }
    }
    // birthDate validation
    if (field === 'birthDate') {
      const isValid = validateDate(e.target.value);
      if (!isValid) {
        setErrorMessage('Please follow yyyy-mm-dd format')
      } else {
        setErrorMessage('');
        setFormState({ ...formState, [field]: e.target.value });
      }
    }


    console.log('value', e.target.value);

  };

  const clearForm = () => {

    console.log(formState);

  }

  return (

    <form id="contact-form" onSubmit={handleSubmit} className="contactForm" >

      <div>
        <h1 data-testid="h1tag" className="contactTitle">Contact Us</h1>
      </div>

      <div className="contactItem">
        <label htmlFor="name">Name:</label>
        <input className="contactInput" type="text" name="name" defaultValue={name} onBlur={handleChange} />
      </div>

      <div className="contactItem">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
      </div>

      <div className="contactItem">
        <label htmlFor="message">Birth Date:</label>
        <input name="birthDate" rows="5" defaultValue={birthDate} onBlur={handleChange} />
      </div>

      <div className="contactItem">
        <input type="checkbox" name="emailConsent" defaultValue={emailConsent} onClick={handleChange} />
        <label> I agree to be contacted via email</label>
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <div id="formButtons">

        <div className="contactItem submitContact">
          <button data-testid="button" onClick={clearForm}>Clear</button>
        </div>

        <div className="contactItem submitContact">
          <button data-testid="button" type="submit">Submit</button>
        </div>

      </div>


    </form>

  )

}

export default Contact;