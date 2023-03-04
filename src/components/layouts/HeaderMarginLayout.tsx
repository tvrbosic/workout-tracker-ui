import { Box } from '@chakra-ui/react';

interface IHeaderMarginLayoutProps {
  children: React.ReactNode;
}

export default function HeaderMarginLayout({ children }: IHeaderMarginLayoutProps) {
  return <Box marginTop={'9vh'}>{children}</Box>;
}
