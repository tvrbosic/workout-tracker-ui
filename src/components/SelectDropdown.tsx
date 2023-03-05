import { useState } from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, MenuButtonProps } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface ISelectDropdownProps extends MenuButtonProps {
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
}

function SelectDropdown({ placeholder = 'Select option', options, ...rest }: ISelectDropdownProps) {
  const [displayValue, setDisplayValue] = useState(placeholder);
  const [selectedOption, setSelectedOption] = useState(options[0] || { value: '', label: '' });

  const handleSelect = (option: { value: string; label: string }) => {
    setSelectedOption(option);
    setDisplayValue(option.label);
  };

  console.log(selectedOption);
  return (
    <Menu autoSelect={true}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} {...rest}>
        {displayValue}
      </MenuButton>
      <MenuList width={'100%'}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SelectDropdown;
