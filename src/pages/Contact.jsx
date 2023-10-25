import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
   const handleValidation = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value))
      {
        setErrorMessage('NOT RIGHT MISTER/MISS')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage("REQUIRED, GIVE ME THE DEETS")
      } else {
        setErrorMessage('')
      }
    }
   }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('SENT');
  };

  return (
    <div className="container text-center container mt-5 bg-dark rounded-4 text-light">
      <Form className="form" onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  onBlur = {handleValidation}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control           
        value={name}
          name="name"
          onChange={handleInputChange}
          onBlur = {handleValidation}
        type="text" placeholder="Enter your name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3}
        value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
          onBlur={handleValidation} />
      </Form.Group>


        <Button type="submit">Submit</Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
