import React from 'react'
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './register.css'
    

function register() {
    return (
        <div className="login-container">
          <h2 className="text-center mb-4">Account</h2>
          <Form  style={{ maxWidth: '800px', margin: 'auto' }}>
            {/* Name and Lastname Row */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Enter your lastname" />
              </Form.Group>
            </Row>
    
            {/* Username and Password Row */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
            </Row>
    
           
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridGmail">
                <Form.Label>Gmail</Form.Label>
                <Form.Control type="email" placeholder="Enter your Gmail" />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>
            </Row>
    
            
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
    
           
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Agree to terms and conditions" />
            </Form.Group>
    
            
            <div className="d-grid">
            <Link to="/login" className="btn btn-outline-primary me-2">Submit</Link>
            </div>
          </Form>
        </div>
      );
    }

export default register
