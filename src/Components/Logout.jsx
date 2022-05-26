import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
const Logout = () => {
    return (
        <div className="formInput">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h3>You have been Logout</h3>
                    <Link to='/login'>Go to login</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Logout;

