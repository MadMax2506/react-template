import { PaletteOptions } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { Theme, ThemeOptions } from '@mui/material/styles/createTheme';

/**
 * General styling for light and dark mode
 */
export const generalSettings: Omit<ThemeOptions, 'palette' | 'components'> = {};

/**
 * Component styling for light and dark mode
 */
export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      fullWidth: true,
    },
  },
};

/**
 * Palette for light and dark mode
 */
export const palette: Omit<PaletteOptions, 'mode'> = {};

/**
 * Custom type definition
 */
declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions {}
}
