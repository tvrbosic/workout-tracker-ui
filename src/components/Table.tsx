import {
  TableContainer,
  Table as CTable,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  TableProps,
} from '@chakra-ui/react';

interface ITableProps extends TableProps {
  caption?: string;
  headers: string[];
  data: any[][];
}

function Table({ headers, data, caption }: ITableProps) {
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
          {data.map((row, index) => (
            <Tr key={index}>
              {row.map((cell, index) => (
                <Td key={index}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </CTable>
    </TableContainer>
  );
}

export default Table;
