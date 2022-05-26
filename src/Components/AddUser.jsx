import React from 'react';
import { Modal, Form,Button } from "react-bootstrap";
const AddViewUser = (props) => {
    const { addEdit, userData, handleChange, handleClose, addNewUser } = props
    return (
        <Modal show onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{addEdit ? 'View' : 'Add'} User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={userData.name} required onChange={(e) => handleChange(e)} disabled={addEdit} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={userData.email} required onChange={(e) => handleChange(e)} disabled={addEdit} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" name="phone" value={userData.phone} required onChange={(e) => handleChange(e)} disabled={addEdit} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" placeholder="Enter DOB" name="date_of_birth" value={userData.date_of_birth} required onChange={(e) => handleChange(e)} disabled={addEdit} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            {!addEdit && <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addNewUser}>
                    Save Changes
                </Button>
            </Modal.Footer>}
        </Modal>

    );
}

export default AddViewUser;
