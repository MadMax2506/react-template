import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Routes } from 'routes/Routes';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </CookiesProvider>
  );
};
