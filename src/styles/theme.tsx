import { ThemeProvider } from 'styled-components';
import React from 'react';

import { myTheme } from "../themes/myTheme";
import GlobalStyles from './global';

const Theme: React.FC = ({ children }) => (
    <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;
