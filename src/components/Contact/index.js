import React, { useState } from 'react';
import axios from 'axios';
import { validateEmail, validateDate } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', birthDate: '', emailConsent: false });
  const [errorMessage, setErrorMessage] = useState({ name: '', email: '', birthDate: '', emailConsent: '', result: '' });

  const { name, email, birthDate, emailConsent } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    handleValidation(e);

    console.log(formState)

    // checks to make sure there are no empty fields
    if (
      !formState.name === '' ||
      !formState.email === '' ||
      !formState.birthDate === '' ||
      !formState.emailConsent === false
    ) {
      // if no empty fields, checks if all inputs are valid
      if (
        errorMessage.name === '' &&
        errorMessage.email === '' &&
        errorMessage.birthDate === '' &&
        errorMessage.emailConsent === ''
      ) {
        // ====================================== successful submission ===========================================
        setErrorMessage({ ...errorMessage, result: 'Success!' });
        postAPI(formState);

      } else {
        console.log(errorMessage);
        setErrorMessage({ ...errorMessage, result: 'Unable to send. Check fields.' });
      }

    } else {

      if (formState.emailConsent === false) {
        setErrorMessage({ ...errorMessage, result: 'Must check box to be contacted.' });
      } else {

        setErrorMessage({ ...errorMessage, result: 'Unable to send. Empty Field.' });
      }

    }

  };

  // function for updating values as user types
  const handleChange = (e) => {
    const field = e.target.name;

    if (field === 'emailConsent') {

      console.log('test')

      setFormState({ ...formState, [field]: e.target.checked })

    } else {

      setFormState({ ...formState, [field]: e.target.value })

    }

  }

  // function for validating input fields
  const handleValidation = (e) => {
    const field = e.target.name;
    // email validation
    if (field === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage({ ...errorMessage, [field]: 'You must type a valid email.' });
      } else {
        setErrorMessage({ ...errorMessage, [field]: '' });
        setFormState({ ...formState, [field]: e.target.value });
      }

    }
    // emailConsent validation
    if (field === 'emailConsent') {
      const isValid = e.target.checked === true;
      if (!isValid) {
        setErrorMessage({ ...errorMessage, [field]: 'Email consent must be given' });
      } else {
        setErrorMessage({ ...errorMessage, [field]: '' });
        setFormState({ ...formState, [field]: e.target.checked });
      }
    }
    // name validation
    if (field === 'name') {
      const isValid = e.target.value.length > 1;
      if (!isValid) {
        setErrorMessage({ ...errorMessage, [field]: 'Name cannot be blank.' });
      } else {
        setErrorMessage({ ...errorMessage, [field]: '' });
        setFormState({ ...formState, [field]: e.target.value });
      }
    }
    // birthDate validation
    if (field === 'birthDate') {
      const isValid = validateDate(e.target.value);
      if (!isValid) {
        setErrorMessage({ ...errorMessage, [field]: 'Please follow yyyy-mm-dd format' });
      } else {
        setErrorMessage({ ...errorMessage, [field]: '' });
        setFormState({ ...formState, [field]: e.target.value });
      }
    }

  };

  // clears input field of current values
  const clearFormData = (e) => {

    setFormState({ ...formState, name: '', email: '', birthDate: '', emailConsent: false })

    setErrorMessage('');

  }

  const postAPI = (data) => {
    console.log(data);

    axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // html for component
  return (

    <div id="contact-form" onSubmit={handleSubmit} className="contactForm" >

      {/* ======================== title ==================== */}
      <div>
        <h1 data-testid="h1tag" className="contactTitle">Contact Us</h1>
      </div>

      {/* ======================== inputs ==================== */}

      {/* ======================================== name =================================== */}
      <div className="contactItem">
        <label htmlFor="name">Name:</label>
        <input className="contactInput" type="text" name="name" value={name} onChange={handleChange} onBlur={handleValidation} />
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage.name}</p>
        </div>
      )}

      {/* ======================================= email =================================== */}
      <div className="contactItem">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} onBlur={handleValidation} />
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage.email}</p>
        </div>
      )}

      {/* ====================================== birth date =============================== */}
      <div className="contactItem">
        <label htmlFor="message">Birth Date:</label>
        <input name="birthDate" rows="5" value={birthDate} onChange={handleChange} onBlur={handleValidation} />
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage.birthDate}</p>
        </div>
      )}

      {/* ================================== email consent ================================= */}
      <div className="contactItem">
        <input type="checkbox" name="emailConsent" value={emailConsent} checked={emailConsent} onChange={handleChange} onBlur={handleValidation} />
        <label> I agree to be contacted via email</label>
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage.emailConsent}</p>
        </div>
      )}

      {/* ======================== buttons ==================== */}
      <div id="formButtons">

        <div className="contactItem submitContact">
          <button data-testid="button" onClick={clearFormData}>Clear</button>
        </div>

        <div className="contactItem submitContact">
          <button data-testid="button" type="submit" onClick={handleSubmit}>Submit</button>
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage.result}</p>
          </div>
        )}

      </div>


    </div>

  )

}

export default Contact;