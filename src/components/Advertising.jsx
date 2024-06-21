import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';

const Advertising = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios.get('/api/vacancies')
      .then(response => setVacancies(response.data))
      .catch(error => console.error('Error fetching vacancies:', error));
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Advertising Property Vacancies</Heading>
      <VStack spacing={4} align="stretch">
        {vacancies.map(vacancy => (
          <Box key={vacancy.id} p={4} bg="gray.100" borderRadius="md">
            <Text><strong>Property:</strong> {vacancy.property}</Text>
            <Text><strong>Unit:</strong> {vacancy.unit}</Text>
            <Text><strong>Description:</strong> {vacancy.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Advertising;