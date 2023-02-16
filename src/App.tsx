import { Todo } from 'components/Todo/Todo';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
};
