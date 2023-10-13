import { Translate } from '@components/Translate';
import { Box, Container } from '@mui/material';

export const Home = (): JSX.Element => {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Translate textKey={'menu.home'} />
      </Box>
    </Container>
  );
};
