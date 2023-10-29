import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

function Navbar() {
  const { handleLogout, loggedUser } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <Flex
      as='nav'
      align='center'
      backgroundColor='blue.400'
      justify='space-between'
      paddingX='6'
      paddingY='4'
    >
      <Text fontSize='xl' as='b'>
        ComplaintHub
      </Text>
      <Flex gap='2' alignItems='center'>
        <Flex gap='2' alignItems='center'>
          <Avatar
            color='blackAlpha.900'
            size='sm'
            name={loggedUser?.name}
            background='blue.100'
          />
          <Flex direction='column'>
            <Text>{loggedUser?.name}</Text>
            <Button
              variant='link'
              padding='0'
              onClick={onLogout}
              fontSize='2xs'
              color='blackAlpha.700'
            >
              Sair
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
