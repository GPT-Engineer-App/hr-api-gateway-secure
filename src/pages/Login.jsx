import { Box, Heading, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Login = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading>Login</Heading>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue">Login</Button>
    </VStack>
  </Box>
);

export default Login;