import {
  TableContainer,
  Table as CTable,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableProps,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import CategoryBadge from 'components/CategoryBadge';

import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface ITableProps<T extends object> extends TableProps {
  caption?: string;
  headers: string[];
  // Array of generic typescript objects
  data: T[];
}

function WorkoutsTable<T extends object>({ headers, data, caption }: ITableProps<T>) {
  return (
    <TableContainer>
      <CTable variant="simple" colorScheme={'gray'}>
        {!!caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th key={header} fontSize={14} py={5}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((object, objIndex) => (
            <Tr
              key={objIndex}
              _hover={{
                bgColor: 'green.50',
              }}
            >
              {Object.values(object).map((value, valueIndex) => {
                // If the value is the category, render a badge
                if (valueIndex === 1) {
                  return (
                    <Td key={valueIndex}>
                      <CategoryBadge category={value} />
                    </Td>
                  );
                }
                return <Td key={valueIndex}>{value}</Td>;
              })}
              <Td key={'controls'}>
                <HStack>
                  <IconButton
                    aria-label="Edit button"
                    bgColor={'blue.500'}
                    _hover={{ bgColor: 'blue.600' }}
                    icon={<FiEdit />}
                  />
                  <IconButton
                    aria-label="Delete button"
                    bgColor={'red.500'}
                    _hover={{ bgColor: 'red.600' }}
                    icon={<FiTrash2 />}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </CTable>
    </TableContainer>
  );
}

export default WorkoutsTable;
