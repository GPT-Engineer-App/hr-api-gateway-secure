import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Rental Management</Text>
        <Text>Manage your rentals efficiently and effectively.</Text>
      </VStack>
    </Container>
  );
};

export default Index;