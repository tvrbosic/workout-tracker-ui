/**
 * Chakra UI components theme overrides
 * https://chakra-ui.com/docs/styled-system/component-style
 */
import { defineStyleConfig } from '@chakra-ui/react';
import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// Create objects with a set of functions that helps us create multipart component styles
const inputHelpers = createMultiStyleConfigHelpers(inputAnatomy.keys);
const menuHelpers = createMultiStyleConfigHelpers(['menu', 'item']);

// Theme globals
const transition: string = 'all 0.3s';

export const Button = defineStyleConfig({
  // Common styles for all buttons
  baseStyle: {
    transition,
  },
  // Variants
  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'green.500',
      color: 'green.500',
      _hover: {
        bg: 'green.500',
        color: 'white',
      },
    },
    solid: {
      bg: 'green.500',
      color: 'gray.100',
      _hover: {
        bg: 'green.600',
      },
    },
  },
  // Default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export const Input = inputHelpers.defineMultiStyleConfig({
  baseStyle: {
    addon: {
      transition,
    },
    field: {
      transition,
    },
  },
  variants: {
    outline: {
      addon: {
        color: 'gray.800',
        bgColor: 'green.300',
        border: '1px solid',
        borderColor: 'green.500',
        _hover: {
          bgColor: 'green.400',
        },
      },
      field: {
        color: 'gray.800',
        borderColor: 'green.500',
        _focus: {
          boxShadow: 'none',
          bgColor: 'whiteAlpha.200',
        },
        _hover: {
          borderColor: 'gray.500',
        },
      },
    },
    filled: {
      field: {
        color: 'gray.100',
        bg: 'whiteAlpha.100',
        border: 0,
        _focus: {
          bg: 'whiteAlpha.200',
          boxShadow: 'none',
        },
        _hover: {
          bg: 'whiteAlpha.200',
        },
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
});

export const Menu = menuHelpers.defineMultiStyleConfig({
  baseStyle: {
    item: {
      transition,
      py: 2,
      px: 4,
      _hover: {
        bg: 'green.200',
      },
    },
  },
});

export const IconButton = defineStyleConfig({
  // Common styles for all buttons
  baseStyle: {
    transition,
  },
  // Variants
  variants: {
    solid: {
      bg: 'green.500',
      color: 'gray.100',
      _hover: {
        bg: 'green.600',
      },
    },
  },
  // Default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
