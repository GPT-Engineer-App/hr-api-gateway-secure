import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
            Rental Management
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/about" color="white" mr={4}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white" mr={4}>
            Contact
          </Link>
          <Link as={RouterLink} to="/role-based-access-control" color="white" mr={4}>
            Role-Based Access Control
          </Link>
          <Link as={RouterLink} to="/tenant-onboarding" color="white" mr={4}>
            Tenant Onboarding
          </Link>
          <Link as={RouterLink} to="/payment-processing" color="white" mr={4}>
            Payment Processing
          </Link>
          <Link as={RouterLink} to="/reporting" color="white" mr={4}>
            Reporting
          </Link>
          <Link as={RouterLink} to="/notices" color="white" mr={4}>
            Notices
          </Link>
          <Link as={RouterLink} to="/advertising" color="white" mr={4}>
            Advertising
          </Link>
          <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline">
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;