import { useState } from 'react';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Spinner,
  MenuButtonProps,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { IDropdownOption } from 'ts/definitions';
import { capitalizeFirstLetter } from 'utils/utility';

interface IDropdownPropsMenu extends MenuButtonProps {
  placeholder?: string;
  options: Array<IDropdownOption>;
  onValueChange?: (option: IDropdownOption) => void;
  preselectedValue?: IDropdownOption;
  isLoading: boolean;
}

function DropdownMenu({
  placeholder = 'Select option',
  options,
  onValueChange,
  preselectedValue,
  isLoading,
  ...rest
}: IDropdownPropsMenu) {
  const [selectedOption, setSelectedOption] = useState<IDropdownOption>(
    preselectedValue || options[0]
  );

  console.log(preselectedValue);

  const handleSelect = (option: IDropdownOption) => {
    setSelectedOption(option);
    onValueChange && onValueChange(option);
  };

  return (
    <Menu autoSelect={true}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} {...rest}>
        {isLoading === true ? (
          <Spinner size={'sm'} />
        ) : (
          capitalizeFirstLetter(selectedOption.name) || placeholder
        )}
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
