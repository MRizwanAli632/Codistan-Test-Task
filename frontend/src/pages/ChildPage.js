import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';  //hooks to get the data in params
function ChildPage() {
    const [children, setChildren] = useState([]);
    const { id } = useParams();  // getting parent id from the url
    const location = useLocation();  // getting data from ParentPage component
    console.log('proppppps', id, location.state)
    const { receiver, sender, totalAmount } = location ?.state
    useEffect(() => {
        const fetchChildren = async () => {// fetching children data from the server when the component is mounted
            try {
                const res = await axios.get(`http://localhost:5000/api/parents/${id}/children`);
                console.log('Response in Child', res.data);
                setChildren(res.data);
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchChildren();
    }, [id]);

    return (
        <>
            <h1>Child Table</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Total Amount</th>
                        <th>Paid Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((child) => (
                        <tr key={child.id}>
                            <td>{child.id}</td>
                            <td>{sender}</td>
                            <td>{receiver}</td>
                            <td>{totalAmount}</td>
                            <td>{child.paidAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default ChildPage;
