import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button as CButton,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useAuthContext } from '../../context/AuthContext';
import Logo from '../Logo';
import NavLink from '../NavLink';
import Button from '../Button';

const PublicMenu = ['Home', 'About', 'Contact'];
const LoggedUserMenu = ['Dashboard', 'Calendar', 'Workouts', 'Programs'];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authCtx = useAuthContext();
  const [bgColor, setBgColor] = useState('transparent');

  const NavMenu = () => {
    return (
      <>
        {authCtx.user
          ? LoggedUserMenu.map((link) => <NavLink key={link}>{link}</NavLink>)
          : PublicMenu.map((link) => <NavLink key={link}>{link}</NavLink>)}
      </>
    );
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      // Set color to a darker shade
      setBgColor('blue.800');
    } else {
      // Reset color to transparent in initial position
      setBgColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener on unmount (avoid memory leaks)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box px={4} bg={bgColor} position="fixed" width="100%" transition={'all 200ms linear'}>
        <Flex minH={'9dvh'} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} flexGrow={1} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              flexGrow={1}
              justifyContent={'center'}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavMenu />
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            {authCtx.user ? (
              <Menu>
                <MenuButton
                  as={CButton}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>

                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button>Log in</Button>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavMenu />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
