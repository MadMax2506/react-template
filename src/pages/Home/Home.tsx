import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{t('menu.home')}</Box>
    </Container>
  );
};
