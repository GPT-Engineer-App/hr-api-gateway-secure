import React, { useState } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

const PaymentProcessing = () => {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    axios.post('/api/process-payment', { amount, phone })
      .then(response => {
        setMessage('Payment processed successfully');
      })
      .catch(error => {
        setMessage('Error processing payment');
      });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Payment Processing</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>Process Payment</Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Box>
  );
};

export default PaymentProcessing;