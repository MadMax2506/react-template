import { CssBaseline, ScopedCssBaseline } from '@mui/material';
import { Todo } from 'components/Todo/Todo';

export const App = () => {
  /* <ThemeProvider theme={undefined}>*/
  return (
    <ScopedCssBaseline>
      <CssBaseline />
      <Todo />
    </ScopedCssBaseline>
  );
};
