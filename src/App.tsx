import { Todo } from 'components/Todo/Todo';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <Todo />
      </ThemeProvider>
    </CookiesProvider>
  );
};
