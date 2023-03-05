/**
 * Chakra UI components theme overrides
 * https://chakra-ui.com/docs/styled-system/component-style
 */
import { defineStyleConfig } from '@chakra-ui/react';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(['menu', 'item']);

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

export const Menu = helpers.defineMultiStyleConfig({
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
