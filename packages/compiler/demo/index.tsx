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
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/default';
import Page from './Page';

ReactDOM.render( (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page />
    </ThemeProvider>
), document.getElementById( 'root' ) );
