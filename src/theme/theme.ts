import { extendTheme } from '@chakra-ui/react';
import { Button, Input, Menu, IconButton, Textarea } from 'theme/components';

const theme = extendTheme({
  components: {
    Button,
    Input,
    Menu,
    IconButton,
    Textarea,
  },
});

export default theme;
