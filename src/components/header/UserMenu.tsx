import { useNavigate } from 'react-router-dom';
import { Avatar, Button as CButton, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { IoLogOutOutline, IoSettingsSharp } from 'react-icons/io5';

import { useAuthContext } from 'context/AuthContext';
import routes from 'router/routes';
import MenuItem from 'components/header/MenuItem';

export default function UserMenu() {
  const { clearAuthToken } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    clearAuthToken();
    navigate(routes.root.path);
  };

  return (
    <Menu>
      <MenuButton as={CButton} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar
          size={'sm'}
          src={
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
          }
        />
      </MenuButton>

      <MenuList p={0} borderRadius={'sm'}>
        <MenuItem onClick={() => navigate(routes.profile.path)}>
          <IoSettingsSharp />
          <Text ml={3}>Settings</Text>
        </MenuItem>
        <MenuItem onClick={logoutHandler}>
          <IoLogOutOutline />
          <Text ml={3}>Sign out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
