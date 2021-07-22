import { ThemeProvider as StyledProvider } from 'styled-components';

import './reset.css';
import './main.css';

export default function ThemeProvider({ children }) {
  return <StyledProvider theme={{}}>{children}</StyledProvider>;
}
