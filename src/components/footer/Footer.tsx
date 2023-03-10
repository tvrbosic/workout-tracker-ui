import { Box, Container, SimpleGrid, Stack, Text, Input, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

import Logo from 'components/header/Logo';
import SocialButton from 'components/SocialButton';
import FooterSectionHeader from 'components/footer/FooterSectionHeader';
import FooterNavigation from 'components/footer/FooterNavigation';

export default function Footer() {
  return (
    <Box mt={16} bg={'gray.800'} color={'gray.50'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr', md: '2fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6} alignItems={{ base: 'center', md: 'flex-start' }}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'sm'}>© 2023 Workout Tracker. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
            <FooterSectionHeader>Company</FooterSectionHeader>
            <FooterNavigation />
          </Stack>

          <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
            <FooterSectionHeader>Stay up to date</FooterSectionHeader>
            <Stack direction={'row'}>
              <Input placeholder={'Your email address'} variant="filled" />
              <IconButton aria-label="Subscribe" icon={<BiMailSend />} />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
