import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { validateEmail, validateDate } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', birthDate: '', emailConsent: false });
  const [errorMessage, setErrorMessage] = useState({ name: '', email: '', birthDate: '', emailConsent: '', result: '' });

  const { name, email, birthDate, emailConsent } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    // handleValidation(e);

    // checks to make sure there are no empty fields
    if (
      !formState.name === '' ||
      !formState.email === '' ||
      !formState.birthDate === '' ||
      !formState.emailConsent === false
    ) {
      // if no empty fields, checks if all inputs are valid
      if (
        formState.name === '' ||
        formState.email === '' ||
        formState.birthDate === ''
      ) {
        setErrorMessage({ ...errorMessage, result: 'Unable to send. Empty Field.' });
        return;
      }

      if (
        errorMessage.name === '' &&
        errorMessage.email === '' &&
        errorMessage.birthDate === '' &&
        errorMessage.emailConsent === ''
      ) {
        // ====================================== successful submission ===========================================
        setErrorMessage({ ...errorMessage, result: 'Success!' });
        postAPI(formState);
        // not calling the clear form data function as to not break functionality of clear button from being a clear all
        setFormState({ ...formState, name: '', email: '', birthDate: '', emailConsent: false })

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

  // function for validating name input
  const handleName = (e) => {
    const field = e.target.name;

    setFormState({ ...formState, [field]: e.target.value })

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

  };

  // function for validating email input
  const handleEmail = (e) => {
    const field = e.target.name;

    setFormState({ ...formState, [field]: e.target.value });

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

  };

  // function for validating birthdate input
  const handleBirthdate = (e) => {
    const field = e.target.name;

    setFormState({ ...formState, [field]: e.target.value });

    // birthDate validation
    if (field === 'birthDate') {
      const isValid = validateDate(e.target.value);
      if (!isValid) {
        setErrorMessage({ ...errorMessage, [field]: 'Follow yyyy-mm-dd format' });
      } else {
        setErrorMessage({ ...errorMessage, [field]: '' });
        setFormState({ ...formState, [field]: e.target.value });
      }
    }

  };

  // function for validating email consent
  const handleEmailConsent = (e) => {
    const field = e.target.name;

    setFormState({ ...formState, [field]: e.target.checked })

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

  };

  // clears input field of current values
  const clearFormData = (e) => {

    setFormState({ ...formState, name: '', email: '', birthDate: '', emailConsent: false })

    setErrorMessage({ name: '', email: '', birthDate: '', emailConsent: '', result: '' });

  }

  const postAPI = (data) => {

    let dataTrimmed = {
      name: data.name.trim(),
      email: data.email.trim(),
      emailConsent: data.emailConsent,
      birthDate: data.birthDate.trim()
    }

    console.log(dataTrimmed);

    // axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', dataTrimmed)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }

  // =========================================== html for component ============================================
  return (

    <div id="contact-form" onSubmit={handleSubmit} className="contactForm">

      {/* ======================== title ==================== */}
      <div>
        <h1 data-testid="h1tag" className="contactTitle">Contact Us</h1>
      </div>

      {/* ======================== inputs ==================== */}

      {/* ======================================== name =================================== */}

      <Container>
        <Row className="contactRow">
          <Col variant="input" className="contactInput" style={{ 'padding': '1px' }}>

            <label className="contactLabel" htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleName} onBlur={handleName} autoComplete='off' />

          </Col>

          <Col style={{ 'padding': '1px', 'marginTop': 'auto', 'marginBottom': 'auto' }} >

            {errorMessage && (
              <div>
                <p className="errorMessage">{errorMessage.name}</p>
              </div>
            )}

          </Col>
        </Row>
      </Container>


      {/* ======================================= email =================================== */}

      <Container>
        <Row className="contactRow">
          <Col variant="input" className="contactInput" style={{ 'padding': '1px' }}>

            <label className="contactLabel" htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmail} onBlur={handleEmail} autoComplete="off" />

          </Col>

          <Col style={{ 'padding': '1px', 'marginTop': 'auto', 'marginBottom': 'auto' }} >

            {errorMessage && (
              <div>
                <p className="errorMessage">{errorMessage.email}</p>
              </div>
            )}

          </Col>
        </Row>
      </Container>

      {/* ====================================== birth date =============================== */}

      <Container>
        <Row className="contactRow">
          <Col variant="input" className="contactInput" style={{ 'padding': '1px' }}>

            <label className="contactLabel" htmlFor="birthDate">Birth Date:</label>
            <input id="birthDate" name="birthDate" rows="5" value={birthDate} onChange={handleBirthdate} onBlur={handleBirthdate} autoComplete='off' />

          </Col>

          <Col style={{ 'padding': '1px', 'marginTop': 'auto', 'marginBottom': 'auto' }} >

            {errorMessage && (
              <div>
                <p className="errorMessage">{errorMessage.birthDate}</p>
              </div>
            )}

          </Col>
        </Row>
      </Container>

      {/* ================================== email consent ================================= */}
      <Container>
        <Row >
          <Col style={{ 'padding': '1px' }}>
            <div className="checkboxInput">
              <input className="checkBox" type="checkbox" id="emailConsent" name="emailConsent" value={emailConsent} checked={emailConsent} onChange={handleEmailConsent} onClick={handleEmailConsent} />
              <label className="checkBoxLabel" htmlFor="emailConsent"> I agree to be contacted via email</label>
            </div>

            {errorMessage && (
              <div>
                <p className="errorCheck">{errorMessage.emailConsent}</p>
              </div>
            )
            }
          </Col>

        </Row>
      </Container>


      {/* ======================== buttons ==================== */}
      <Container>
        <Row>

          <Col>
            <div className="contactItem submitContact">
              <button data-testid="button" onClick={clearFormData}>Clear</button>
            </div>
          </Col>

          <Col>
            <div className="contactItem submitContact">
              <button data-testid="button" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </Col>

        </Row>
        <Row>

          <Col>
            {errorMessage && (
              <div>
                <p className="resultText">{errorMessage.result}</p>
              </div>
            )}
          </Col>

        </Row>
      </Container>

    </div >

  )

}

export default Contact;