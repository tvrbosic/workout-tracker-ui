import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useAuthContext } from 'context/AuthContext';
import routes from 'router/routes';
import Logo from 'components/header/Logo';
import Button from 'components/Button';
import Navigation from 'components/header/Navigation';
import MobileNav from 'components/header/MobileNavigation';
import UserMenu from 'components/header/UserMenu';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bgColor, setBgColor] = useState('transparent');
  const authCtx = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Function to change header color on scroll (used only on homepage)
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      // Set color to a darker shade
      setBgColor('gray.800');
    } else {
      // Reset color to transparent in initial position
      setBgColor('transparent');
    }
  };

  // Set event listener on homepage to change header color on scroll
  useEffect(() => {
    // Check if user is on homepage and set event listener
    if (location.pathname === routes.root.path) {
      window.addEventListener('scroll', handleScroll);
      // Cleanup function to remove event listener on unmount (avoid memory leaks)
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      // If user is not on homepage, set header color to a darker shade
    } else {
      setBgColor('gray.800');
    }
  }, [location.pathname]);

  return (
    <Box
      position="fixed"
      width="100%"
      px={8}
      py={1}
      bg={bgColor}
      zIndex="999"
      transition={'all 200ms linear'}
    >
      <Flex minH={'9vh'} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} flexGrow={1} alignItems={'center'} justifyContent={'center'}>
          <Logo />
          <Navigation />
        </HStack>

        <Flex alignItems={'center'}>
          {authCtx.user ? (
            <UserMenu />
          ) : (
            <Button onClick={() => navigate(routes.login.path)}>Sign in</Button>
          )}
        </Flex>
      </Flex>

      {isOpen ? <MobileNav /> : null}
    </Box>
  );
}
