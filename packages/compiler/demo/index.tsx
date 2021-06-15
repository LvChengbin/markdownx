/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: demo/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import theme from './theme/default';
import CssBaseline from '@material-ui/core/CssBaseline';
import Page from './Page';

ReactDOM.render( (
    <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Page />
        </StyledEngineProvider>
    </ThemeProvider>
), document.getElementById( 'root' ) );
