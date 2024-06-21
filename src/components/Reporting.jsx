import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';

const Reporting = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Reporting and Analysis</Heading>
      <VStack spacing={4} align="stretch">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Tenant</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reports.map(report => (
              <Tr key={report.id}>
                <Td>{report.date}</Td>
                <Td>{report.tenant}</Td>
                <Td>{report.amount}</Td>
                <Td>{report.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default Reporting;