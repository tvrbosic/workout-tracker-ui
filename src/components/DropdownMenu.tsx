import { useCallback, useState } from 'react';
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

import { IBasicEntity } from 'ts/definitions';
import { capitalizeFirstLetter } from 'utils/utility';

interface IDropdownPropsMenu extends MenuButtonProps {
  placeholder?: string;
  options: Array<IBasicEntity>;
  onValueChange: (option: IBasicEntity) => void;
  preselectedValue?: IBasicEntity;
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
  const [selectedOption, setSelectedOption] = useState<IBasicEntity>(
    preselectedValue || { id: '0', name: placeholder }
  );

  const handleSelect = useCallback(
    (option: IBasicEntity) => {
      setSelectedOption(option);
      onValueChange(option);
    },
    [onValueChange]
  );

  return (
    <Menu autoSelect={true}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} {...rest}>
        {isLoading === true ? (
          <Spinner size={'sm'} />
        ) : (
          capitalizeFirstLetter(selectedOption.name) || placeholder
        )}
      </MenuButton>
      <MenuList width={'100%'} color={'gray.800'} overflow="auto" maxHeight={{ base: '15rem' }}>
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
