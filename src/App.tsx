import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Routes } from 'routes/Routes';
import { LanguageProvider } from 'context/LanguageContext/LanguageContext';

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
