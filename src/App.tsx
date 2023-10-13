import { LanguageProvider } from '@context/LanguageContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Routes } from '@routes';
import { CookiesProvider } from 'react-cookie';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Routes />
        </LanguageProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
};
