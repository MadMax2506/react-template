import { Box, Container } from '@mui/material';
import { T } from 'components/T/T';

export const Home = (): JSX.Element => {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <T textKey={'menu.home'} />
      </Box>
    </Container>
  );
};
