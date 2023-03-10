import { useState } from 'react';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuButtonProps,
  Spinner,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { capitalizeFirstLetter } from 'utils/utility';

interface IDropdownPropsMenu extends MenuButtonProps {
  placeholder?: string;
  options: Array<{ id: string; name: string }>;
  isLoading: boolean;
}

function DropdownMenu({
  placeholder = 'Select option',
  options,
  isLoading,
  ...rest
}: IDropdownPropsMenu) {
  const [displayValue, setDisplayValue] = useState(placeholder);
  const [selectedOption, setSelectedOption] = useState({ id: '', name: '' });

  const handleSelect = (option: { id: string; name: string }) => {
    setSelectedOption(option);
    setDisplayValue(option.name);
  };

  return (
    <Menu autoSelect={true}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} {...rest}>
        {isLoading === true ? <Spinner size={'sm'} /> : displayValue}
      </MenuButton>
      <MenuList width={'100%'} color={'gray.800'}>
        {!isLoading &&
          options.map((option) => (
            <MenuItem key={option.id} value={option.id} onClick={() => handleSelect(option)}>
              {capitalizeFirstLetter(option.name)}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
