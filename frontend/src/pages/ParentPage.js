import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ParentPage = () => {
  const [parents, setParents] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(2);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {  // Adding dependencies to fetch the data on page change and sorting
    fetchParents();
  }, [page, sortBy, sortOrder]);

  // api call to fetch parent data
  const fetchParents = async () => {
    try {
      console.log('API', `http://localhost:5000/api/parents?page=${page}&pageSize=${pageSize}&sort=${sortBy}&sortOrder=${sortOrder}`
      )
      const response = await fetch(
        `http://localhost:5000/api/parents?page=${page}&pageSize=${pageSize}&sort=${sortBy}&sortOrder=${sortOrder}`
      );
      const data = await response.json();
      console.log('response', data)
      setParents(data.data);  // update parent state with updated data
    } catch (error) {
      console.error('Error fetching parents:', error);
    }
  };
  // 
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };
  // update page count and fectching new data
  const handleNextPage = () => {
    if (page >= 4) {
      return;
    }
    else {
      setPage(val => (val + 1))
    }
  }

  // styling the table 
  const renderTableHeader = () => {
    return (
      <tr>
        <th onClick={() => handleSort('id')}>Parent ID</th>
        <th style={{ padding: 10 }}>Sender</th>
        <th style={{ padding: 10 }}>Receiver</th>
        <th style={{ padding: 10 }}>Total Amount</th>
        <th style={{ color: 'red', padding: 10 }}>Total Paid Amount</th>
      </tr>
    );
  };
  // Populating data in table
  const renderTableRows = () => {
    return parents.map((parent) => {
      const { id, sender, receiver, totalAmount, installmentIds } = parent;  // desturctoritn parent 
      const totalPaidAmount = installmentIds.length ? installmentIds.reduce((sum, installment) => sum + installment.paidAmount, 0) : 0;

      return ( // last field : Routing to ChildPage with the parent id and the respective data using react-router-dom state
        <tr key={id}>
          <td style={{ padding: 10 }}>{id}</td>
          <td style={{ padding: 10 }}>{sender}</td>
          <td style={{ padding: 10 }}>{receiver}</td>
          <td style={{ padding: 10 }}>{totalAmount}</td>
          <td style={{ padding: 10, color: 'red' }}> <Link to={`/parents/${id}`} state={{ sender: sender, receiver: receiver, totalAmount: totalAmount }}>
            {totalPaidAmount}</Link></td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Parent Table</h1>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <Button variant="primary" onClick={() => handleNextPage()}>Next</Button>

    </div>
  );
};

export default ParentPage;
