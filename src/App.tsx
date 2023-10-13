import { ErrorFallbackPageProps } from '@components/ErrorFallbackPage';
import { LanguageProvider, useLanguageContext } from '@context/LanguageContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Routes } from '@routes';
import { CookiesProvider } from 'react-cookie';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';

export const App = () => {
  return (
    <CookiesProvider>
      <LanguageProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackPageProps}>
          <ThemeProvider>
            <MetaData />
            <Routes />
          </ThemeProvider>
        </ErrorBoundary>
      </LanguageProvider>
    </CookiesProvider>
  );
};

export const MetaData = () => {
  const { language, translate } = useLanguageContext();

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{translate('meta.title')}</title>
    </Helmet>
  );
};
