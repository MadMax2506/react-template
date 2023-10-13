import { LanguageProvider, useLanguageContext } from '@context/LanguageContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Routes } from '@routes';
import { CookiesProvider } from 'react-cookie';
import { Helmet } from 'react-helmet';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <LanguageProvider>
          <MetaData />
          <Routes />
        </LanguageProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
};

export const MetaData = () => {
  const { language, t } = useLanguageContext();
  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{t('meta.title')}</title>
    </Helmet>
  );
};
