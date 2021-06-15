/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: docs/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Documentation from './Documentation';

ReactDOM.render( (
    <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Documentation />
        </StyledEngineProvider>
    </ThemeProvider>
), document.getElementById( 'root' ) );
