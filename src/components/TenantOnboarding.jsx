import React, { useState } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

const TenantOnboarding = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    axios.post('/api/onboard-tenant', { name, email, phone })
      .then(response => {
        setMessage('Tenant onboarded successfully');
      })
      .catch(error => {
        setMessage('Error onboarding tenant');
      });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Tenant Onboarding</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>Onboard Tenant</Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Box>
  );
};

export default TenantOnboarding;