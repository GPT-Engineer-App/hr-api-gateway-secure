import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get('/api/notices')
      .then(response => setNotices(response.data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Notices for Tenant Exits</Heading>
      <VStack spacing={4} align="stretch">
        {notices.map(notice => (
          <Box key={notice.id} p={4} bg="gray.100" borderRadius="md">
            <Text><strong>Date:</strong> {notice.date}</Text>
            <Text><strong>Tenant:</strong> {notice.tenant}</Text>
            <Text><strong>Message:</strong> {notice.message}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Notices;