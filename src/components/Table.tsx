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
} from '@chakra-ui/react';

interface ITableProps<T extends object> extends TableProps {
  caption?: string;
  headers: string[];
  // Array of generic typescript objects
  data: T[];
}

function Table<T extends object>({ headers, data, caption }: ITableProps<T>) {
  return (
    <TableContainer>
      <CTable variant="simple">
        {!!caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th key={header}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((object, objIndex) => (
            <Tr key={objIndex}>
              {Object.values(object).map((value, valueIndex) => (
                <Td key={valueIndex}>{value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </CTable>
    </TableContainer>
  );
}

export default Table;
