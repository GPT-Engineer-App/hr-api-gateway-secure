import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Button, Select, Text } from '@chakra-ui/react';
import axios from 'axios';

const RoleBasedAccessControl = () => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    // Fetch roles and permissions from the server
    axios.get('/api/roles').then(response => setRoles(response.data));
    axios.get('/api/permissions').then(response => setPermissions(response.data));
  }, []);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handlePermissionChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedPermissions(value);
  };

  const handleSubmit = () => {
    // Submit the selected role and permissions to the server
    axios.post('/api/assign-role', { role: selectedRole, permissions: selectedPermissions })
      .then(response => {
        console.log('Role assigned successfully:', response.data);
      })
      .catch(error => {
        console.error('Error assigning role:', error);
      });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Role-Based Access Control</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="role">
          <FormLabel>Role</FormLabel>
          <Select placeholder="Select role" onChange={handleRoleChange}>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="permissions">
          <FormLabel>Permissions</FormLabel>
          <Select multiple placeholder="Select permissions" onChange={handlePermissionChange}>
            {permissions.map(permission => (
              <option key={permission.id} value={permission.id}>{permission.name}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>Assign Role</Button>
      </VStack>
    </Box>
  );
};

export default RoleBasedAccessControl;