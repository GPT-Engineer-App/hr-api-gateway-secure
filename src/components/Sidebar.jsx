import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" w="250px" h="100vh" position="fixed">
      <Flex direction="column" h="100%" justifyContent="space-between">
        <VStack spacing={4} mt={8}>
          <Link as={RouterLink} to="/apartments" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Apartments
          </Link>
          <Link as={RouterLink} to="/units" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Units
          </Link>
          <Link as={RouterLink} to="/tenants" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Tenants
          </Link>
          <Link as={RouterLink} to="/leases" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Leases
          </Link>
          <Link as={RouterLink} to="/configurations" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Configurations
          </Link>
          <Link as={RouterLink} to="/role-based-access-control" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Role-Based Access Control
          </Link>
          <Link as={RouterLink} to="/tenant-onboarding" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Tenant Onboarding
          </Link>
          <Link as={RouterLink} to="/payment-processing" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Payment Processing
          </Link>
          <Link as={RouterLink} to="/reporting" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Reporting
          </Link>
          <Link as={RouterLink} to="/notices" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Notices
          </Link>
          <Link as={RouterLink} to="/advertising" w="100%" textAlign="center" py={2} _hover={{ bg: "gray.700" }}>
            Advertising
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;